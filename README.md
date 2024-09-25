# User Authentication API

This project is a Node.js + MySQL REST API that provides user registration and login functionality. It includes a simple HTML/JS front-end for testing the authentication system.

## Features

- User registration
- User login
- JWT-based authentication
- Protected routes
- Simple front-end for testing

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v12 or later recommended)
- MySQL installed and running
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your MySQL database:
   - Create a new database named `logintest` (or update the database name in `config/database.js`)
   - Update the database credentials in `config/database.js` if necessary

4. Start the server:
   ```
   npm start
   ```
   For development with auto-restart:
   ```
   npm run dev
   ```

## Usage

### API Endpoints

- `POST /api/auth/register`: Register a new user
  - Body: `{ "username": "example", "email": "user@example.com", "password": "password123" }`

- `POST /api/auth/login`: Login a user
  - Body: `{ "email": "user@example.com", "password": "password123" }`

- `GET /api/auth/protected`: A protected route (requires authentication)
  - Header: `Authorization: Bearer <token>`

### Front-end Testing

1. Open a web browser and navigate to `http://localhost:3000`
2. Use the registration form to create a new user
3. Use the login form to log in with the created user
4. After successful login, you'll be redirected to the dashboard
5. Click the logout button to log out and return to the login page

## Project Structure

- `server.js`: Main application file
- `config/database.js`: Database configuration
- `routes/auth.js`: Authentication routes
- `controllers/authController.js`: Authentication logic
- `models/user.js`: User model
- `middleware/auth.js`: Authentication middleware
- `index.html`: Login and registration page
- `dashboard.html`: Protected dashboard page
- `auth.js`: Front-end authentication logic

## Dependencies

- express: Web application framework
- sequelize: ORM for database operations
- mysql2: MySQL client for Node.js
- bcryptjs: Library for hashing passwords
- jsonwebtoken: Implementation of JSON Web Tokens
- cors: Middleware to enable CORS
- body-parser: Middleware to parse request bodies
