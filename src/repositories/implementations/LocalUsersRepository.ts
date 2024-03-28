import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class LocalUsersRepository implements IUsersRepository {
    private users: User[];

    constructor() {
        this.users = []; 
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}