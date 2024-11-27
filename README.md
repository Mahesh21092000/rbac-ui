
### Admin Dashboard for Role-Based Access Control (RBAC)

## Project Overview

This project is an Admin Dashboard designed for managing users, roles, and permissions using Role-Based Access Control (RBAC) principles. The application provides a secure and user-friendly interface where administrators can assign roles, define permissions, and efficiently manage users.

## Features:

# 1.User Management:
View and manage the list of users.
Add, edit, or delete users.
Assign roles to users.
Manage user statuses (Active/Inactive).

# 2.Role Management:
Create and edit roles.
Assign permissions to roles (e.g., Read, Write, Delete).
View role details and associated permissions.

# 3.Dynamic Permissions:
Easily modify permissions for specific roles.
Display permissions clearly for better visibility and understanding.

# 4.Responsive Design:
Adapts seamlessly to different devices (desktop, tablet, mobile).

# 5.CRUD Operations:
Implemented for both users and roles, with real-time updates.

# Technical Stack

# Frontend:
React.js
Material-UI (MUI)
React Router DOM
Axios
React-Toastify

# Backend:
JSON Server (mock backend for development purposes).


# setup Instructions:
Follow these steps to set up and run the project locally.

# 1. Clone the Repository

-git clone <repository-url>
-cd rbac-ui

# 2. Install Dependencies
Run the following command to install all necessary dependencies:

-npm install

# 3. Set Up JSON Server
The project uses a mock backend powered by JSON Server to fetch user and role data.
Create a file named db.json in the project directory and add the following data:

-{
  "users": [
    {
      "name": "Mahesh",
      "role": "Admin",
      "active": true,
      "id": "1"
    },
    {
      "name": "User",
      "role": "User ",
      "active": false,
      "id": "2"
    }
  ],
  "roles": [
    {
      "id": "1",
      "name": "Mahes"
    },
    {
      "id": "2",
      "name": "User "
    }
  ]
}

# Start the JSON Server with the following command:
 --npx json-server --watch db.json --port 3001

The server will run at http://localhost:3001.

# 4. Start the React Development Server
In another terminal, start the React app:

-npm start



