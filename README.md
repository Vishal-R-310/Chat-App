**Real Time Chat Application**

This project is a **Real-time chat application** featuring a modern and sleek design, incorporating the _**Glassmorphism Effect**_ for an elegant and immersive user interface. Users can create accounts and participate in real-time conversations with other users. The application features an intuitive user interface for seamless navigation and interaction and is suitable for various purposes.       

**_Features_**

1. User Authentication
2. Real-Time Messaging
3. User Presence Indication
4. Message History
5. Search Functionality
6. Responsive Design

**_Demo_**

![Screenshot 2024-05-12 165613](https://github.com/Vishal-R-310/Chat-App/assets/152421463/f1f2042d-66fc-45e7-852b-3b0e59abad98)


**Installation**

To run this application locally, follow these steps:

**_Prerequisites_**

* Node.js and npm 
* MongoDB Atlas account

**_Backend Setup_**

Create a .env file in the backend directory and assign values for

    PORT=          
    MONGODB_URI=
    JWT_SECRET=
    NODE_ENV=

and to install all dependencies, run 

`npm install`

_**Frontend Setup**_

Change the directory to frontend

`cd frontend`

* Inside **vite.config.js** file change the port to **3000** and set proxy to the backend port

To install all dependencies, run

`npm install`

**Usage**

1. Start the backend development server using `npm run server`.
2. Start the frontend development server by changing into the frontend directory and run `npm run dev`.
3. Open your browser and navigate to `http://localhost:3000`.

**Technologies Used**

- _**React**_ with _**Vite.js**_ for the frontend
- _**Express**_ with _**Socket.IO**_ for the backend
- _**MongoDB Atlas**_ for the database
- _**Tailwind CSS**_ for styling
- _**Daisy UI**_ for UI components
- _**Socket.IO**_ for real-time communication
