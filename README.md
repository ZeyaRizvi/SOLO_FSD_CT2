# FALCONS Student Team Members Management Application

A full-stack web application for managing student team members, built with the MERN stack (MongoDB, Express, React, and Node.js).

## Features

- Display team name across the application
- Add new team members with profile images
- View all team members in a responsive grid layout
- View detailed information about individual team members
- RESTful API endpoints for member data management

## Project Structure

```
├── backend/                  # Backend Node.js/Express server
│   ├── controllers/          # Route controllers
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── uploads/              # Uploaded profile images
│   ├── .env                  # Environment variables
│   ├── package.json          # Backend dependencies
│   └── server.js             # Main server file
│
├── frontend/                 # React frontend application
│   ├── public/               # Public assets
│   └── src/                  # React source files
│       ├── components/       # Reusable components
│       ├── pages/            # Page components
│       └── styles/           # CSS stylesheets
│
└── README.md                 # Project documentation
```

## Installation

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- npm or yarn
- Git

### Cloning the Repository

1. Open a terminal and clone the repository:
   ```bash
   git clone https://github.com/drgeekg/FALCONS_FSDCT2.git
   ```

2. Navigate to the project directory:
   ```bash
   cd FALCONS_FSDCT2
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/team_members_db
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## API Endpoints

### Members API

- **GET /api/members**
  - Returns all team members
  - Response: Array of member objects

- **GET /api/members/:id**
  - Returns a single team member by ID
  - Response: Member object

- **POST /api/members**
  - Creates a new team member
  - Request: Form data with member details and optional profile image
  - Response: Created member object

- **PUT /api/members/:id**
  - Updates an existing team member
  - Request: Form data with updated member details
  - Response: Updated member object

- **DELETE /api/members/:id**
  - Deletes a team member
  - Response: Success message

## Technologies Used

- **Frontend**:
  - React.js
  - React Router DOM for navigation
  - Axios for API requests
  - Bootstrap for styling

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - Multer for file uploads

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Team

- FALCONS Team

## License

This project is licensed under the MIT License.