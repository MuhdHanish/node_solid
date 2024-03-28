import { Request, Response } from "express";
import { ICreateUserRequestDTO } from "./CeateUserDTO"; 
import { CreateUserUseCase } from "./CreateUserUseCase";

// Controller responsible for handling user creation requests
export class CreateUserController {
    constructor(
        // Instance of CreateUserUseCase
        private readonly createUserUseCase: CreateUserUseCase
    ) { }

    // Method to handle incoming HTTP requests to create a new user
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            // Extract user data from the request body
            const userData: ICreateUserRequestDTO = req.body;

            // Execute the use case to create a new user using the provided data
            await this.createUserUseCase.execute(userData);

            // Respond with success message if user creation is successful
            return res.status(201).send({ message: "User created successfully." });
        } catch (error) {
            // Handle errors during user creation
            console.error("Error creating user:", error);

            // Respond with an error message and status code 500 (Internal Server Error)
            return res.status(500).send({ error: "Internal Server Error.", message: error instanceof Error ? error.message : `Unexpected Error.` });
        }
    }
}
