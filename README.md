# MERN Authentication App 🔐

A full-stack authentication application built using the **MERN stack** — featuring secure user login, registration, and email handling. The frontend is powered by **React + Vite**, while the backend is built with **Express.js** and **MongoDB**.

---

## 🧰 Tech Stack

### 🖥️ Frontend (`client/`)
- [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for fast development
- [React Context API](https://reactjs.org/docs/context.html) for global state management
- [ESLint](https://eslint.org/) for linting and code quality
- CSS Modules and responsive layout

### 🗄️ Backend (`server/`)
- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv) for environment variable management
- [Nodemailer](https://nodemailer.com/) for sending emails

---

## 📁 Folder Structure

mern-auth-secure/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node/Express backend
│   ├── config/
│   ├── controllers/
│   ├── connectDB.js
│   ├── server.js
│   ├── nodemailer.js
│   ├── package.json
│   └── .env
│
└── README.md


---

## ⚙️ Setup Instructions

### 🔃 Clone the Repo

```bash
git clone https://github.com/your-username/mern-auth-secure.git
cd mern-auth-secure
