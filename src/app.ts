import express from "express"; 
import { config } from "dotenv"; 
import { router } from "./routes"; 

// Load environment variables from .env file into process.env
config(); 

// Create an Express application instance
const app = express(); 

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Middleware to use the router for handling routes
app.use(router);

// Export the Express application instance for use in other parts of the application
export { app };
