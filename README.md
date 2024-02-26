# Property App

This is a simple fullstack application that allows users to view a list of properties and add a new porperty to the list. More details can be found in the individual README files of the backend and frontend repositories.

## 20+ Hours

In the next 20 hours and beyond I would look to implement the following:

further api setup - a simple database for the backend, using Mongo DB, a simple blob store like S3 for the images, schema set up for the backend API

form improvements - for a more user-friendly experience, I would break down the address elements such as house number, address lines etc with full validation. As a stretch to this implementation, I would look into an address lookup/auto-fill for user convenience.

property details improvements - there would be more information a user would expect from a property. I would leave the current GET /properties endpoint with it's current functionality, returning the basic information and I would add another endpoint to get the extended information.

CRUD operations - add update & delete endpoints.

React Router set up - There will inevitably be more pages in the future.

authentication - we don't want just anyone posting to the site, it would need authentication / sign up process before going live.
