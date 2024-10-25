# MERN Chat App

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to sign up, log in, and chat with others, featuring secure authentication and a smooth user experience.

## Features

- **Authentication**: Users can sign up and log in securely.
- **Real-Time Chat**: Instant messaging experience.
- **Protected Routes**: Only authenticated users can access the chat (home) page.
- **Responsive UI**: Optimized for desktop and mobile.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, `react-hot-toast`
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Context API with `useAuthContext` for managing authentication state
- **Routing**: `react-router-dom`

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/hduraimurugan/mern-chat-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd mern-chat-app
   ```

### Backend Setup

1. Install server dependencies:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file for environment variables and add your MongoDB URI and JWT secret:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

3. Start the server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the client folder:
   ```bash
   cd client
   npm install
   ```

2. Start the frontend:
   ```bash
   npm start
   ```

## Usage

- **Sign Up**: Register with a new account.
- **Log In**: Access the chat room after logging in.
- **Chat**: Send messages in real-time.

## Project Structure

```plaintext
mern-chat-app/
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   └── Home.js
│   │   │   ├── login/
│   │   │   │   └── Login.js
│   │   │   └── signup/
│   │   │       └── SignUp.js
│   │   └── context/
│   │       └── AuthContext.js
│   └── ...
└── server/
    └── ...
```

## Future Improvements

- Add user-to-user private chat
- Add notifications for new messages
- Implement dark mode

## License

This project is open source and available under the [MIT License](LICENSE).

