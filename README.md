# Random Quotes Web Application

## Overview
This Random Quotes web application provides users with inspiring and thought-provoking quotes. It features a user-friendly interface where users can view a random quote, search for quotes by author, and view a list of quotes in a neatly organized format. The application is built with a React frontend and an Express backend, with data stored in a MongoDB database.

## Features
- Display a random quote on page load
- Search for quotes by author
- View a list of all quotes
- Responsive design for various screen sizes

## Technology Stack
### Frontend
- **React**: A JavaScript library for building user interfaces
- **CSS**: Styling for the application with animations and effects

### Backend
- **Node.js**: JavaScript runtime for building scalable network applications
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for storing quotes

## API Endpoints
- **GET /api/quotes/random**: Fetch a random quote
- **GET /api/quotes**: Fetch all quotes
- **GET /api/quotes/author/:author**: Fetch quotes by a specific author

## Setup and Installation
### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/random-quotes-app.git
   cd random-quotes-app
