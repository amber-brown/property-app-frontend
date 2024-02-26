# Property App

This is a simple React application written in typescript that displays a list of properties and allows a user to post a new property.

## Getting Started

This application backend can be found (here)[https://github.com/amber-brown/property-app-backend] . It is advised to have this running locally before running this application.

To get started with this application, run the following commands in the repository: 

`npm install` && `npm start`

To run the unit tests, please run: 

`npm run test`

## 20+ Hours

In the next 20 hours and beyond I would look to implement the following:

further api setup - a simple database for the backend, using Mongo DB, a simple blob store like S3 for the images, schema set up for the backend API

form improvements - for a more user-friendly experience, I would break down the address elements such as house number, address lines etc with full validation. As a stretch to this implementation, I would look into an address lookup/auto-fill for user convenience.

property details improvements - there would be more information a user would expect from a property. I would leave the current GET /properties endpoint with it's current functionality, returning the basic information and I would add another endpoint to get the extended information.

CRUD operations - add update & delete endpoints.

React Router set up - There will inevitably be more pages in the future.

authentication - we don't want just anyone posting to the site, it would need authentication / sign up process before going live.
