import { Router } from "express";
import { createUserController } from "./useCases/CreateUser"; 

const router = Router(); // Create a new Express router

// Define a POST route for creating users
router.post(`/users`, (req, res) => {
  return createUserController.handle(req, res); // Call the handle method of the createUserController to handle the request
});

// Export the router for use in other parts of the application
export { router }; 
