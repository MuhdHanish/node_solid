import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";

// Implementation of the IMailProvider interface using Gmail SMTP
export class GmailMailProvider implements IMailProvider {
    private transporter: Mail;

    // Constructor to initialize the transporter with Gmail SMTP settings
    constructor() {
        // Create a Nodemailer transporter using Gmail SMTP settings
        this.transporter = nodemailer.createTransport({
            service: `gmail`, // Use Gmail service
            auth: {
                user: 'example@gmail.com', // Your Gmail email address
                pass: 'example.password' // Your One Time Password For Sending Email
            }
        });
    }

    // Method to send an email message using Gmail SMTP
    async sendMail(message: IMessage): Promise<void> {
        // Send the email message using the configured transporter
        await this.transporter.sendMail({
            // Set the recipient's name and email address
            to: {
                name: message.to.name,
                address: message.to.email
            },
            // Set the sender's name and email address
            from: {
                name: message.from.name,
                address: message.from.email
            },
            // Set the subject of the email
            subject: message.subject,
            // Set the HTML body/content of the email
            html: message.body
        });
    }
}
