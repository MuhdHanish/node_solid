# SOLID Node.js TypeScript Server

This project is a demonstration of building a Node.js server using TypeScript while adhering to SOLID principles and clean architecture. SOLID principles are a set of five object-oriented design principles that help developers create more maintainable and scalable software. This server showcases how to apply these principles to a real-world application, resulting in a codebase that is easier to understand, extend, and maintain.

In addition to SOLID principles, this project also emphasizes clean architecture. Clean architecture promotes separation of concerns and decoupling of dependencies, making the codebase more modular and testable. By following clean architecture principles, this server achieves a high level of flexibility and robustness, enabling easier maintenance and future enhancements.

The server provides endpoints for user registration and retrieving users. The server is designed to be scalable and extensible, allowing for easy integration of additional features and functionalities.

## SOLID principles

SOLID is an acronym that represents five design principles of object-oriented programming, aimed at making software designs more understandable, flexible, and maintainable. Here's a brief overview of each principle:

- **S** - Single Responsibility Principle (SRP): A class should have only one reason to change, meaning that it should have only one responsibility.
- **O** - Open/Closed Principle (OCP): Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
- **L** - Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
- **I** - Interface Segregation Principle (ISP): Many client-specific interfaces are better than one general-purpose interface.
- **D** - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions, and abstractions should not depend on details.

Adhering to these principles can lead to more modular, maintainable, and scalable code.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Routes](#routes)
- [Dependencies](#dependencies)
- [Feedback](#feedback)
- [Contributing](#contributing)
- [Support](#support)

## Installation

1. Clone the repository.
2. Run `yarn install` to install dependencies.
3. Run `yarn start` to start the server.

## Usage

This server provides endpoints for user registration and retrieving all users. Users can register with a name, email, and password, and all users can be retrieved using the `GET /users` endpoint.

## Configuration

No environment variables are required for this project.

## Routes

- `POST /users`: Register a new user.
- `GET /users`: Retrieve a list of all registered users.

## Dependencies

- `express`: Web framework for Node.js.
- `dotenv`: Module for loading environment variables from a `.env` file (if needed).
- `typescript`: A superset of JavaScript that adds static typing to the language.
- `ts-node-dev`: TypeScript execution and development tool that restarts the server on file changes.

## Feedback

If you have any feedback, please reach me at [muhammedhanish11@gmail.com](mailto:muhammedhanish11@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/muhdhanish/).

## Contributing

Contributions are welcome! 

## Support

Show your support by 🌟 the project!!
