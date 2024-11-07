# 🌐 VAULT - Client Application

Welcome to the **VAULT Client**! This is the frontend of the VAULT project, an inventory management application. Built with React, Chakra UI, and Zustand, it delivers a clean and responsive interface for managing and viewing products. 🚀

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## 📌 Project Overview

The VAULT Client is a Single Page Application (SPA) created with MERN stack, featuring a smooth user experience and interactive animations. With the power of Chakra UI and Framer Motion, it is designed to be highly customizable and user-friendly.

---

## 🛠️ Technologies Used

This project uses the following technologies:

- **React** - A JavaScript library for building interactive UIs.
- **Chakra UI** - Component-based styling for consistent design.
- **React Router** - Seamless navigation across different pages.
- **Zustand** - Lightweight state management.
- **Framer Motion** - For smooth animations and transitions.
- **Vite** - Fast build tool for optimized development.

### Dependencies

| Package            | Version   | Description                                     |
|--------------------|-----------|-------------------------------------------------|
| `@chakra-ui/icons` | 2.1.1     | Icons library for Chakra UI                     |
| `@chakra-ui/react` | 2.10.3    | Chakra UI React components                      |
| `@emotion/react`   | 11.13.3   | Styling library for CSS-in-JS                   |
| `@emotion/styled`  | 11.13.0   | Styled components for Chakra UI                 |
| `framer-motion`    | 11.11.11  | Animation library                               |
| `react`            | 18.3.1    | Core React library                              |
| `react-dom`        | 18.3.1    | React DOM rendering                             |
| `react-icons`      | 5.3.0     | Icons for React                                 |
| `react-router-dom` | 6.27.0    | Routing library for React                       |
| `zustand`          | 5.0.1     | State management library                        |

---

## 🚀 Setup Instructions

To get the client running locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vault.git
   cd vault/client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

The application should now be running at `http://localhost:3000` 🎉.

---

## 📜 Scripts

Here are some useful commands:

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run lint`**: Lint your code to catch syntax issues.

---

## 📂 Folder Structure

Here’s an overview of the main files and folders in this project:

```plaintext
client
├── public                # Static assets
├── src
│   ├── assets            # Images, icons, etc.
│   ├── components        # Reusable UI components
│   ├── hooks             # Custom hooks
│   ├── pages             # Main views (e.g., Home, Create)
│   ├── store             # Zustand state management
│   └── App.jsx           # Main app component
└── README.md             # Documentation for client
```

---

## 🔐 Environment Variables

Create a `.env` file in the `client` directory with the following variables:

```plaintext
VITE_API_URL=<your_backend_api_url>
```

Make sure not to commit this file as it contains sensitive information. 💡

---

## 🤝 Contributing

We welcome contributions! If you’d like to make improvements to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m "Add new feature"`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. For more details, see the [LICENSE](../LICENSE) file.

---

Thank you for checking out the VAULT Client! 🌟