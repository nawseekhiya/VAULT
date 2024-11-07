# 🔐 VAULT - Inventory Management System

**VAULT** is a full-stack inventory management application built with the MERN stack (MongoDB, Express, React, Node.js). It helps users efficiently manage and track products, with a clean and responsive UI powered by Chakra UI.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## 📌 Project Overview

VAULT provides a seamless and efficient way to manage inventory, enabling users to add, update, and view products. With a responsive frontend built using Chakra UI and Zustand for state management, this application is both functional and user-friendly. 

## ✨ Features

- **Product Management**: Easily add, edit, and delete products.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **User Authentication** (Optional): Secure access and user roles.
- **Real-Time Updates**: Instant UI updates powered by Zustand.

---

## 🛠️ Technologies Used

The VAULT project is built using the following technologies:

- **Frontend**: 
  - React, Chakra UI, React Router, Zustand, Framer Motion
- **Backend**: 
  - Node.js, Express.js, MongoDB
- **Dev Tools**: 
  - Vite, ESLint

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (running locally or accessible via cloud)
- **npm** (v6 or later) or **yarn**

### Clone the Repository

```bash
git clone https://github.com/your-username/vault.git
cd vault
```

### Backend Setup

1. **Navigate to the server folder**:
   ```bash
   cd server
   ```

2. **Install server dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

The server should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the client folder**:
   ```bash
   cd client
   ```

2. **Install client dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

The client should now be running on `http://localhost:XXXX`.

---

## 📜 Scripts

Some useful commands for managing the project:

- **Root Folder**:
  - `npm start` - Starts the backend server.
  - `npm run dev` - Runs both client and server in development mode.
- **Client Folder**:
  - `npm run dev` - Starts the React development server.
  - `npm run build` - Builds the React app for production.
- **Server Folder**:
  - `npm start` - Starts the Express server.

---

## 📂 Folder Structure

```plaintext
vault
├── client                 # Frontend React application
│   ├── public             # Static assets
│   ├── src                # React source files
│   └── README.md          # Client-specific documentation
├── server                 # Backend Express server
│   ├── config             # Configuration files
│   ├── controllers        # Request handlers
│   ├── models             # Database models (e.g., Product model)
│   ├── routes             # Express routes
│   └── README.md          # Server-specific documentation
├── .gitignore             # Ignored files and directories
├── package.json           # Project dependencies and scripts
└── README.md              # Root project documentation
```

---

## 🔐 Environment Variables

To run this project, you need to set up the following environment variables:

1. **Backend** (create a `.env` file in the `server` folder):
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

2. **Frontend** (create a `.env` file in the `client` folder):
   ```plaintext
   VITE_API_URL=http://localhost:5000
   ```

---

## 🤝 Contributing

We welcome contributions! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push your branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out VAULT! We hope this project is helpful and inspires your own projects. 🌟
