// Interface defining the structure of data required to create a new user
export interface ICreateUserRequestDTO {
    name: string;     // Name of the user
    email: string;    // Email address of the user
    password: string; // Password of the user
}