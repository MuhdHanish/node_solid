import { User } from "../entities/User";

// Interface defining methods to interact with user data in a repository
export interface IUsersRepository {
    // Find a user by their email address
    findByEmail(email: string): Promise<User | undefined>;

    // Save a user to the storage
    save(user: User): Promise<void>;
}