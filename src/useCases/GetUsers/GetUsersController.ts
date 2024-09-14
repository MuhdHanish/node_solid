import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

// Controller responsible for handling user creation requests
export class GetUsersController {
    constructor(
        // Instance of GetUsersUseCase
        private readonly getUsersUseCase: GetUsersUseCase
    ) { }

    // Method to handle incoming HTTP requests to create a new user
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.getUsersUseCase.execute();
            return res.status(201).send({ data: users });
        } catch (error) {
            // Handle errors during user creation
            console.error("Error finding users:", error);

            // Respond with an error message and status code 500 (Internal Server Error)
            return res.status(500).send({ error: "Internal Server Error.", message: error instanceof Error ? error.message : `Unexpected Error.` });
        }
    }
}
