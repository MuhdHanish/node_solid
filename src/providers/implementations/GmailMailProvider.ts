import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer';
import { IMailProvier, IMessage } from "../IMailProvider";


export class GmailMailProvider implements IMailProvier {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: `gmail`,
            auth: {
                user: 'example@mail.com',
                pass: 'onetimepasswordofmail'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}