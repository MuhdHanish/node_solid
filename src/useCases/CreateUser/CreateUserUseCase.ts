import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CeateUserDTO";
import { IMailProvier } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: IUsersRepository,
        private readonly mailProvider: IMailProvier
    ) { }
    
    async execute(userData: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.userRepository.findByEmail(userData.email);
        if (userAlreadyExist) {
            throw new Error(`User already exists.`);
        }
        const user = new User(userData);
        await this.userRepository.save(user);
        this.mailProvider.sendMail({
          to: {
            email: userData.email,
            name: userData.name,
          },
          from: {
            email: process.env.SENDER_EMAIL || `sender@example.com`,
            name: process.env.SENDER_NAME || `Sender Name`,
          },
          subject: `Welcome To SOLID Node TS Server`,
          body: `
                <h1>SOLID NODE TS SERVER</h1>
                <p>Dear ${userData.name},</p>
                <p>Welcome To SOLID Node TS Server! 🚀</p>
                <p>Here's a brief overview of our platform:</p>
                <ul>
                    <li>We follow SOLID principles to ensure our codebase is maintainable and scalable.</li>
                    <li>Our backend is built using Node.js with TypeScript, providing type safety and enhanced developer productivity.</li>
                    <li>We adhere to Clean Architecture principles to keep our codebase organized and maintainable, enabling easier testing and future enhancements.</li>
                </ul>
                <p>Once again, welcome aboard!</p>
                <p>Best regards,<br>${process.env.SENDER_NAME || `[Your Name]`}</p>
            `,
        });
    }
}

