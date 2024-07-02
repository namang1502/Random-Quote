# Random Quotes Project

This project is a web application that allows users to search for quotes by author name and displays a random quote of the day. The application is built using React for the frontend and Node.js with Express for the backend, and MongoDB for the database.

## Features

- Display a random quote of the day.
- Search quotes by author name.
- Responsive user interface.

## Technologies Used

- Frontend: React, HTML, CSS
- Backend: Node.js, Express
- Database: MongoDB

## Project Structure

├── backend
│ ├── models
│ │ └── quoteModel.js
│ ├── routes
│ │ └── quoteRoutes.js
│ ├── server.js
│ ├── .env
│ └── package.json
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ │ ├── QuoteOfTheDay.js
│ │ │ ├── QuoteList.js
│ │ │ └── SearchQuotes.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── styles.css
│ └── package.json
├── README.md
