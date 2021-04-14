# Your Neighbor Chef

### Table of Contents

- [Repository](#Repository)
- [Technology Used](#Technology-Used)
- [User Story](#User-Story)
- [Main Application](#Main-Application)
- [Contributors](#Contributors)
- [Contact Info](#Contact-Info)
- [Conclusion](#Conclusion)

# Repository

- This repository is for a web application that allows users to either sign up as a local 'Neighbor Chef' or a 'Foodie.' The goal of this project is to provide a platform to find local chefs, be able to purchase homemade dishes, which are then paid for and delivered to you home. This will allow people to empower each other and bring together their communities by allowing those at home to make some extra money by cooking meals for those around them.

_LINK TO HEROKU DEPLOYMENT_

https://boiling-mesa-93312.herokuapp.com/

# Technology-Used

- To build this project we made sure to follow the MVC paradigm (Model View Controller) to create web application.

- To make our server we used express, alongside other dependencies like nodemon, to make our webpage functional with basic paths and routes.

- For the front-end we utilized express-handlebars to make sure that our html pages were dynamic for the user and ensure we can bring in relevant data.

- Then using express-session with bcrypt we ensure that the user can login to our website, be authenticated, and safely save their information.

- To make our database we use mysql2 and connected to it using Sequelize. This is also how we ensure to save our user's session and safely store it in the database.

- To access our database correctly we used the dotenv file and created a 'gitignore' to make sure that the database and the user's information is secure.

- The multer/multer-s3 npm package is a node.js middleware for handling multipart/form-data, which we used for uploading our photos.

- We also used the uuid npm package to give uploaded images a unique ID before it is then stored in the database so we can later refer to them.

- Amazon Web Services(AWS) is a cloud based service that we used to host our images so we can access/store them using Javascript and the aws-sdk npm package.

- We finally used heroku as a public hosting service to deploy the application so that anyone can navigate and then use it.

# User-Story

- When the application is loaded the user will find a homepage where they can search for local chefs, by using their zip code and selecting a cuisine then be presented with a results page.

- They can also choose to sign up as a "Neighbor Chef' or 'Foodie.' Which allows them to then login and access other features of the website and begin making or ordering dishes.

- Below the main navigation bar we present the user with some information they night be interested in by showing chefs profiles and dishes that they can navigate through, browse, and shop.

- After signing up as a Chef the user creates a profile, can build a menu by adding dishes, and soon connect with Foodies to begin selling their products.

- After signing up as a Foodie the user can search for Chefs nearby them based on their zip code and look through the provided menus to place some orders.

- When the purchases are made the local Chef will then prepare the given dishes and so they can deliver them to the user at their home (following all safety procedures and precautions).

### Main-Application

_IMAGES BELOW_

_Main-Page_

 <!-- Insert screenshots -->

 ![YNC-HomePage](https://user-images.githubusercontent.com/73864182/114357586-c6b8e280-9b26-11eb-937a-66fad97fdd35.png)


_END OF APPLICATION_

# Contributors:

- Amal Janabayev

- Jasur Amirov

- Jenni Detmering

- Hanh Le

- Greg Harris

# Conclusion

- This project was very challenging, it required many hours of collaboration and lots of teamwork. But we were able to finally build a minimal viable product with the hopes to work on some other features and finally make our website more complete. 

- We hope to go through our list of future developments to add more usability for this application in a real world scenario. Such as expand on the search bar, linking thumbnails to profiles, adding abilities for the user with their Foodie accounts, and provide a cart/checkout function.

- Overall this assignment tested us on various levels and we learned how to better work together to build out this project, apply the methods we've been taught in class, do outside research on new technologies, and use the we've been learning about to create a mostly developed webpage application.
