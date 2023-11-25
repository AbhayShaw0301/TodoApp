# TodoAppBackend

Welcome to TodoAppBackend! This project is a simple runtime todo application backend that does not require a database. It utilizes Express session for managing user sessions.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AbhayShaw0301/TodoAppBackend.git
cd TodoApp
```

### 2.Set up your environment variables
Create a .env file in the root of the project and add the following variables:
```bash
PORT=5000
SECRET_KEY=v0HV3FAnb_0K1pi
```
For the PORT variable, please enter your preferred port number. 
For the SECRET_KEY variable, provide a string of 14 digits as the secret key.

### 3.Install dependencies
```bash
npm install
```
### 4.Run the server

```bash
npm start
```
The server will start running on the specified port, and you can now integrate it with your TodoAppFrontend.

### Important Note
This project does not use a database and is designed to be a runtime todo application. 
Feel free to reach out if you have any questions or need further assistance!


# User Authentication and Todo API Documentation

## Table of Contents

1. [User Authentication](#user-authentication)
   1. [Register User](#register-user)
   2. [Login User](#login-user)
2. [Todo Operations](#todo-operations)
   1. [Get Todos](#get-todos)
   2. [Create Todo](#create-todo)
   3. [Update Todo](#update-todo)
   4. [Delete Todo](#delete-todo)

---

## User Authentication

### Register User

#### `POST /api/register`

**Description:** Creates a new user account.

**Request:**
- `name` (string): The username of the new user.
- `email` (string): The email address of the new user.
- `password` (string): The password for the new user.

**Response:**
- `201 Created`: User registration successful.
  - `message` (string): "New User Created Successfully."
  - `user` (object): Details of the newly registered user.

**Example:**
```json
POST /api/register

Request:
{
  "name": "exampleUser",
  "email": "user@example.com",
  "password": "secretpassword"
}

Response:
{
  "message": "New User Created Successfully",
  "user": {
    "username": "exampleUser",
    "email": "user@example.com",
    "id": "generatedUserId"
  }
}
```

### Login User

#### `POST /api/login`

**Description:** Authenticates a user and generates a session.

**Request:**
- `name` (string): The username or email of the user.
- `password` (string): The password for the user.

**Response:**
- `200 OK`: Login successful.
  - `message` (string): "Login successful."
  - `user` (object): Details of the logged-in user.

- `401 Unauthorized`: Invalid username/email or password.
  - `message` (string): "Invalid username/email or password."

**Example:**
```json
POST /api/login

Request:
{
  "name": "exampleUser",
  "password": "secretpassword"
}

Response:
{
  "message": "Login successful",
  "user": {
    "username": "exampleUser",
    "email": "user@example.com",
    "id": "userId"
  }
}
```

---

## Todo Operations

### Get Todos

#### `GET /api/todos`

**Description:** Retrieves all todos.

**Response:**
- `200 OK`: Successful request.
  - `Array`: List of todos.

**Example:**
```json
GET /api/todos

Response:
[
  {
    "title": "Todo 1",
    "description": "Description 1",
    "status": "Incomplete",
    "date": "2023-11-24",
    "id": "todoId1",
    "userId": "userId1"
  },
  {
    "title": "Todo 2",
    "description": "Description 2",
    "status": "Complete",
    "date": "2023-11-25",
    "id": "todoId2",
    "userId": "userId1"
  }
]
```

### Create Todo

#### `POST /api/todos`

**Description:** Creates a new todo for the authenticated user.

**Request:**
- `title` (string): The title of the todo.
- `description` (string): The description of the todo.
- `status` (string): The status of the todo (e.g., "Incomplete").

**Response:**
- `201 Created`: Todo creation successful.
  - `message` (string): "Todo created successfully."
  - `todo` (object): Details of the newly created todo.

**Example:**
```json
POST /api/todos

Request:
{
  "title": "New Todo",
  "description": "Description of the todo",
  "status": "Incomplete"
}

Response:
{
  "message": "Todo created successfully",
  "todo": {
    "title": "New Todo",
    "description": "Description of the todo",
    "status": "Incomplete",
    "date": "2023-11-26",
    "id": "newTodoId",
    "userId": "userId1"
  }
}
```

### Update Todo

#### `PUT /api/todos/:id`

**Description:** Updates an existing todo.

**Request:**
- `id` (string): The unique identifier of the todo to be updated.
- `title` (string): The updated title of the todo.
- `description` (string): The updated description of the todo.
- `status` (string): The updated status of the todo (e.g., "Complete").

**Response:**
- `200 OK`: Todo update successful.
  - `message` (string): "Todo updated successfully."
  - `todo` (object): Details of the updated todo.

- `404 Not Found`: Todo not found.
  - `message` (string): "Todo not found."

**Example:**
```json
PUT /api/todos/todoId1

Request:
{
  "title": "Updated Todo",
  "description": "Updated description",
  "status": "Complete"
}

Response:
{
  "message": "Todo updated successfully",
  "todo": {
    "title": "Updated Todo",
    "description": "Updated description",
    "status": "Complete",
    "date": "2023-11-26",
    "id": "todoId1",
    "userId": "userId1"
  }
}
```

### Delete Todo

#### `DELETE /api/todos/:id`

**Description:** Deletes an existing todo.

**Request:**
- `id` (string): The unique identifier of the todo to be deleted.

**Response:**
- `201 Created`: Todo deletion successful.
  - `message` (string): "Todo deleted successfully."
  - `todo` (object): Details of the deleted todo.

- `404 Not Found`: Todo not found.
  - `message` (string): "Todo not found."

**Example:**
```json
DELETE /api/todos/todoId1

Response:
{
  "message": "Todo deleted successfully",
  "todo": {
    "title": "Updated Todo",
    "description": "Updated description",
    "status": "Complete",
    "date": "2023-11-26",
    "id": "todoId1",
    "userId": "userId1"
  }
}
```

This documentation provides a guide for interacting with the User Authentication and Todo APIs.

## Video : For Better understanding of API usage.


https://github.com/AbhayShaw0301/TodoApp/assets/148813870/58a3669d-1c86-4e06-80b4-8101769944a4




