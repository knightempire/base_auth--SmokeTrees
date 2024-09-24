# User Address Registration API

## Introduction

This project is a basic API designed for user registration and address storage, developed as part of an assessment by SmokeTrees.

## Description

The API allows users to submit their names and addresses. User information is stored in a MySQL database, utilizing a one-to-many relationship where one user can have multiple addresses.

## Tools

- Node.js
- Express
- MySQL


## Table Creation

To set up the database, execute the following SQL commands in your MySQL environment:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    address TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

```


## API Endpoints

### 1. Register User and Address

- **Endpoint**: `POST /api/register`
- **Description**: Allows a user to register by submitting their name and address.
  
- **Request Body**:
    ```json
    {
        "name": "John Doe",
        "address": "123 Main St"
    }
    ```

- **Sample Response**:
    - **Success** (201):
    ```json
    {
        "message": "User and address added successfully!"
    }
    ```

    - **Error** (500):
    ```json
    {
        "error": "Error message"
    }
    ```
