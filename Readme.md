# Food App Server

This repository contains the backend server for the Food App project. The server is built using **Node.js** and includes features to manage authentication, user data, restaurants, categories, and food items. Middleware such as CORS and Morgan is used to improve security and logging.

## Project Setup

### Key Technologies
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database to store application data.
- **dotenv**: Environment variable management.
- **CORS**: For Cross-Origin Resource Sharing.
- **Morgan**: HTTP request logging.

---

### Features
- RESTful API to manage:
  - Authentication (`/api/v1/auth`)
  - Users (`/api/v1/user`)
  - Restaurants (`/api/v1/restaurant`)
  - Categories (`/api/v1/category`)
  - Food items (`/api/v1/food`)
- Middleware for:
  - JSON parsing (`express.json`)
  - HTTP logging (`morgan`)
  - CORS support (`cors`)

---

### Setup Instructions

1. **Clone the Repository**
   git clone https://github.com/Shashank127Yadav/Food_App.git
   cd Food_App
   
2. **Install Dependencies
   npm install

3. **Configure Environment Variables Create a .env file in the root directory:
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key

4. **Start the Server
   npm start
     
