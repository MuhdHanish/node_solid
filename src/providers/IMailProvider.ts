// Interface defining the structure of an email address
export interface IAddress {
    email: string; // Email address of the user
    name: string;  // Name of the user
}

// Interface defining the structure of an email message
export interface IMessage {
    to: IAddress;       // Recipient of the email
    from: IAddress;     // Sender of the email
    subject: string;    // Subject of the email
    body: string;       // Body/content of the email
}

// Interface defining methods for sending emails
export interface IMailProvider {
    // Send an email message
    sendMail(message: IMessage): Promise<void>;
}
