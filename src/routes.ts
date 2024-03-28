import { Router } from "express";
import { createUserController } from "./useCases/CreateUser"; 

 // Create a new Express router
const router = Router();

// Define a POST route for creating users
router.post(`/users`, (req, res) => {
    // Call the handle method of the createUserController to handle the request
    return createUserController.handle(req, res); 
});

// Export the router for use in other parts of the application
export { router }; 
