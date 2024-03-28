import { v4 as uuid } from "uuid";

// User class representing a user entity
export class User {
    public readonly id!: string; // Unique identifier for the user
    public name!: string;        // Name of the user
    public email!: string;       // Email address of the user
    public password!: string;    // Password of the user

    // Constructor to create a new User object
    constructor(props: Omit<User, 'id'>, id?: string) {
        // Assign properties passed in props to the User object
        Object.assign(this, props);

        // If id is not provided, generate a new unique id using uuid
        if (!id) {
            this.id = uuid();
        }
    }
}
