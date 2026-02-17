import express from "express"; // ✅ You need this!
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config.js";
import connectDB from "./config/connectDB.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",           // You can specify your frontend origin here instead of `true`
  credentials: true
}));

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Start server
app.listen(port, () => {
  console.log(`✅ Server started on PORT: ${port}`);
});
