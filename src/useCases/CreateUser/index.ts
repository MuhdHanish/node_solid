import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { GmailMailProvider } from "../../providers/implementations/GmailMailProvider"; 
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";

// Create instances of the required classes and interfaces

// Create a new instance of User Repository to handle user data storage
const userRepository = new LocalUsersRepository();

// Create a new instance of Mail Provider to handle sending emails
const mailProvider = new GmailMailProvider();

// Create a new instance of Use Case, injecting the user repository and mail provider
const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailProvider
);

// Create a new instance of Controller, injecting the Use Case
const createUserController = new CreateUserController(
    createUserUseCase
);

// Export instances of Use Case and Controller for use in other parts of the application
export { createUserUseCase, createUserController };
