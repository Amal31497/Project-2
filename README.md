# Your Neighbor Chef

### Table of Contents 

* [Repository](#Repository) 
* [Technology Used](#Technology-Used) 
* [User Story](#User-Story)
* [Main Application](#Main-Application)
* [Contributors](#Contributors)
* [Contact Info](#Contact-Info)
* [Conclusion](#Conclusion)

# Repository

- This repository is for a web application that allows users to either sign up as a local 'Neighbor Chef' or a 'Foodie.' The goal of this project is to provide a platform to find local chefs, be able to purchase homemade dishes, which are then paid for and delivered to you home. This will allow people to empower each other and bring together their communities by allowing those at home to make some extra money by cooking meals for those around them. 

*LINK TO HEROKU DEPLOYMENT*

<!-- Insert Link to Heroku -->

# Technology-Used

- To build this project we made sure to follow the MVC paradigm (Model View Controller) to create web application.

- To make our server we used express, alongside other dependencies like nodemon, to make our webpage functional with basic paths and routes.

- For the front-end we utilized express- handlebars to make sure that our html pages were dynamic for the user. 

- Then using express-session with bcrypt we ensure that the user can login to our website, be authenticated, and safely save their information. 

- To make our database we use mysql2 and connected to it using Sequelize. This is also how we ensure to save our user's session and safely store it in the database. 

- To access our database correctly we used the dotenv file and created a 'gitignore' to make sure that the database and the user's information is secure.

<!-- Jenni/Jasur finish explaining these technologies -->

- multer/multer-s3...

- uuid...

- aws-sdk...

- We finally used heroku deploy the application to a public hosting service so that anyone can navigate and then use it.

# User-Story

- When the application is loaded the user will find a homepage where they can search for local chefs, by using their zip code and selecting a cuisine then be presented with a results page.

- They can also choose to sign up as a "Neighbor Chef' or 'Foodie.' Which allows them to then login and access other features of the website and begin making or ordering dishes.

- Below the main navigation bar we present the user with some information they night be interested in by showing chefs profiles and dishes that they can navigate through, browse, and shop.

- After signing up as a Chef the user creates a profile, can build a menu by adding dishes, and soon connect with Foodies to begin selling their products.

- After signing up as a Foodie the user can search for Chefs nearby them based on their zip code and look through the provided menus to place some orders.

- When after the purchases are made the local Chef will prepare the given dishes and then deliver them to the user at their home (following all safety procedures and precautions).

### Main-Application

*IMAGES BELOW*

*Main-Page*

 <!-- Insert screenshots -->

*END OF APPLICATION*

# Contributors:

- Amal Janabayev
- Jasur Amirov
- Jenni Detmering
- Hanh Le
- Greg Harris

# Contact-Info:

<!-- Finish Contact Info -->

- Name: Amal Janabayev
- Email: ...

- Name: Jasur Amirov
- Email: ...

- Name: Jenni Detmering
- Email: ...

- Name: Hanh Le
- Email: ...

- Name: Greg Harris
- Email: ghart.productions@gmail.com

# Conclusion

- Overall this project was very challenging, required many hours of collaboration, and lots teamwork. But we were able to finally build a minimal viable product with the hopes to work on some other features and make our website complete. We hope to go through our list of future developments to add more functionality and usability for this application in a real world scenario. But we learned how to better work together to build out this project, apply the methods we've been taught in class, and use the technologies we've been learning about to create a fully developed webpage application.