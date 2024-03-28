import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserRequestDTO } from "./CeateUserDTO";

export class CreateUserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userData: ICreateUserRequestDTO = req.body;
            await this.createUserUseCase.execute(userData);
            return res.status(201).send({ message: "User created successfully." });
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).send({ error: "Internal Server Error.", message: error instanceof Error ? error.message : `Unexpected Error.` });
        }
    }
}