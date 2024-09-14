import { IUsersRepository } from "../../repositories/IUsersRepository";

// Use case responsible for creating a get all users
export class GetUsersUseCase {
    constructor(
        // Repository for user data
        private readonly userRepository: IUsersRepository,
    ) { }
    async execute() {
        return await this.userRepository.getUsers();
    }
}
