import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

// Import routes
import connectDB from './connectdb.js';
import clientRoutes from './routes/client.js';

config();
const app = express();

// Middleware for JSON and URL-encoded body parsing
app.use(express.json({ limit: '50mb' }));  // Handle JSON bodies
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // Handle URL-encoded data (optional)

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
export default app;
