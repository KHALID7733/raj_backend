import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";

// Import routes
import connectDB from "./connectdb.js";
import clientRoutes from './routes/client.js';

config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/client', clientRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

