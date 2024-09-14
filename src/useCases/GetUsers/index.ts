import { GetUsersUseCase } from "./GetUsersUseCase";
import { GetUsersController } from "./GetUsersController";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";

// Create instances of the required classes and interfaces

// Create a new instance of User Repository to handle user data storage
const userRepository = new LocalUsersRepository();

// Create a new instance of Use Case, injecting the user repository
const getUsersUseCase = new GetUsersUseCase(
    userRepository,
);

// Create a new instance of Controller, injecting the Use Case
const getUsersController = new GetUsersController(
    getUsersUseCase
);

// Export instances of Use Case and Controller for use in other parts of the application
export { getUsersUseCase, getUsersController };
