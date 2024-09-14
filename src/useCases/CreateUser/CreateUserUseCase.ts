import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CeateUserDTO"; 
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// Use case responsible for creating a new user
export class CreateUserUseCase {
    constructor(
        // Repository for user data
        private readonly userRepository: IUsersRepository, 
        // Provider for sending emails
        private readonly mailProvider: IMailProvider           
    ) { }
    
    // Method to execute the use case of creating a new user
    async execute(userData: ICreateUserRequestDTO) {
        // Check if user already exists with the provided email
        const userAlreadyExist = await this.userRepository.findByEmail(userData.email);
        
        // If user already exists, throw an error
        if (userAlreadyExist) {
            throw new Error(`User already exists.`);
        }

        // Create a new User object using the provided user data
        const user = new User(userData);

        // Save the new user to the repository
        await this.userRepository.save(user);
    }
}
