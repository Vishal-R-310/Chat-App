import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [messages, setMessages] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const socket = io("https://chat-app-yt.onrender.com", {
				query: {userId: authUser._id,}
			});

			setSocket(socket);

			// socket.on() is used to listen to the events. 
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			socket.on("newMessage", (message) => {
				setMessages((prevMessages) => [...prevMessages, message]);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	const sendMessage = (message) => {
		if (socket) {
			socket.emit("newMessage", message);
		}
	};

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};