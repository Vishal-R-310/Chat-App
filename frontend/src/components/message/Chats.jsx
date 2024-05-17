import React, { useState } from "react";
import { useSocketContext } from "../../context/SocketContext"; 

const Chat = () => {
    const { messages, sendMessage } = useSocketContext();
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            sendMessage({ text: newMessage, senderId: "your-sender-id" });
            setNewMessage("");
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.senderId}</strong>: {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
