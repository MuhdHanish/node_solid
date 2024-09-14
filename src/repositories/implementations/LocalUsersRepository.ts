import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class LocalUsersRepository implements IUsersRepository {
    // Initialize the users array
    private static users: User[] = [];

    // Find a user by their email address
    async findByEmail(email: string): Promise<User | undefined> {
        // Search for the user in the users array
        const user = LocalUsersRepository.users.find(user => user.email === email);
        return user; // Return the user if found, otherwise return undefined
    }

    // Save a user to the local storage (array)
    async save(user: User): Promise<void> {
        LocalUsersRepository.users.push(user); // Add the user to the users array
    }

    // Find all users
    async getUsers(): Promise<User[]>{
        return LocalUsersRepository.users;
    }
}