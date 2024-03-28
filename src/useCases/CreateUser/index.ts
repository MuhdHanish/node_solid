import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { GmailMailProvider } from "../../providers/implementations/GmailMailProvider";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";

const userRepository = new LocalUsersRepository();
const mailProvider = new GmailMailProvider();

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController };