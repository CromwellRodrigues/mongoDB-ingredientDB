# Node.js API with MongoDB
This repository contains a Node.js application that provides a RESTful API for managing products. 

The application uses Express.js for the server, Mongoose for MongoDB interactions, and various security and performance enhancements.

# Features

⚡CRUD Operations : Create, Read, Update, and Delete products.

 🍃MongoDB Integration: Uses Mongoose to interact with a MongoDB database.

 # 🔒 Security Enhancements:
    
    ⛑️Helmet: Sets various HTTP headers for security.

    ❌ CORS: Enables Cross-Origin Resource Sharing.

    🫸 Rate Limiting: Limits repeated requests to public APIs and endpoints.

    💉Data Sanitization: Prevents MongoDB Operator Injection.

    🚪XSS Protection: Prevents cross-site scripting (XSS) attacks.
    
    🌁HTTP Parameter Pollution Protection: Protects against HTTP Parameter Pollution attacks.

    🔑Content Security Policy (CSP): Adds Content Security Policy headers to help prevent XSS attacks.

  
   # Environment Management: 
  
   - 🌐 Uses dotenv for environment variable management.

  # Middleware: 
  
  - 🈴 Parses JSON and URL-encoded data.


# Getting Started

# Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

# Installation

- Clone the repository:

# Install dependencies:

- Create a .env file in the root directory and add your MongoDB URI:

- Start the server:

# API Endpoints

- GET /api/products: Retrieve all products.
- GET /api/products/:id: Retrieve a product by ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update a product by ID.
- DELETE /api/products/:id: Delete a product by ID.

  
# Security Features

- Rate Limiting: Limits each IP to 100 requests per 15 minutes.
- Content Security Policy: Restricts sources for scripts and other resources to prevent XSS attacks.
