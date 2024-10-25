# MERN Chat App

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js). This app supports secure authentication, user-to-user messaging, and real-time chat, with a structured backend API.

## Features

- **Real-Time Messaging**: Real-time communication with Socket.IO integration.
- **Authentication**: User sign-up, login, and session management.
- **RESTful API**: Organized API routes for authentication, messaging, and user management.
- **Responsive UI**: Optimized for both desktop and mobile views.

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, `react-hot-toast`
- **Backend**: Node.js, Express, Socket.IO, MongoDB
- **Database**: MongoDB
- **Environment Configuration**: Managed with dotenv for secure credential storage

## Project Structure

```plaintext
mern-chat-app/
├── backend/
│   ├── routes/
│   │   ├── auth.routes.js     # Handles user authentication
│   │   ├── message.routes.js  # Manages messaging API routes
│   │   └── user.routes.js     # Handles user-related API routes
│   ├── db/
│   │   └── connectToMongoDB.js # MongoDB connection setup
│   ├── socket/
│   │   └── socket.js          # Socket.IO server configuration
│   └── ...
└── frontend/
    ├── dist/                   # Production build
    └── src/                    # Frontend source code
```

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hduraimurugan/mern-chat-app.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd mern-chat-app
   ```

### Backend Setup

1. Install server dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in the backend directory for environment variables, and add the following:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
3. **Start the Backend Server**:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
2. Build the frontend for production:
   ```bash
   npm run build
   ```

### Run the Application

The server will start on the specified port, defaulting to **PORT 5000**. Once running, the app will serve the frontend from the `dist` directory.

## API Endpoints

- **Authentication**: `/api/auth` - handles signup, login, and session validation.
- **Messages**: `/api/messages` - routes for sending and retrieving messages.
- **Users**: `/api/users` - manage user-related functions, such as profile data retrieval.

## Usage

1. **Sign Up**: Register with a unique account.
2. **Login**: Access the chat room upon login.
3. **Real-Time Chat**: Engage in live chat with other users.

## Future Enhancements

- Add support for direct, private chats.
- Integrate a notifications feature for new messages.
- Explore additional chat features, like emoji support or media sharing.

## License

This project is open source and available under the [MIT License](LICENSE).
