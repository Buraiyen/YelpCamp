# YelpCamp

## What is YelpCamp?

Looking for a place around the world to camp at? Inspired by *Yelp*, *YelpCamp* is a user-friendly application that allows users to create and view various camping places from all over the world and to write reviews on them

This project originated from [Colt Steele's Web Development Bootcamp 2021 on Udemy](https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22643915?start=0#questions). This repository showcases what I have learned from that course and my progress with this application: 

- https://github.com/Brian-E-Nguyen/Web-Dev-Bootcamp-2020

[Link to deployed application](https://yelpcamp-brian-e-nguyen.herokuapp.com/)

## Features

- User account creation; authentication and authorization
- Creating, updating, and deleting a campground, as long as the user owns it
    - Name
    - Description
    - Location
    - Price
    - Image(s)
- Creating and deleting a user's own review to a campground
- Multiple-campgrounds page showcases all campgrounds in their respective card. The page also shows a large interactive cluster map of all the campgrounds that are posted on this application
- Fleshed-out single campground view page
    - Campground description and image(s)
    - Reviews
    - Interactive map of the campground's location

## Libaries / Frameworks / Packages 

- [Bootstrap 5](https://getbootstrap.com/) - responsive frontend design library
- [connect-flash](https://www.npmjs.com/package/connect-flash) - flashes messages to users
- [connect-mongo](https://www.npmjs.com/package/connect-mongo) - MongoDB session store for Connect and Express
- [dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a `.env` file into `process.env`
- [EJS Mate](https://www.npmjs.com/package/ejs-mate) - `layout`, `partial` and `block` template functions for EJS
- [express-session](https://www.npmjs.com/package/express-session) - simple session middleware for Express
- [Express JS](https://expressjs.com/) - framework for NodeJS applications
- [Express Mongoose Sanitize](https://www.npmjs.com/package/express-mongo-sanitize) - sanitizes user-supplied data to prevent MongoDB Operator Injection
- [Helmet](https://helmetjs.github.io/) - secures Express apps by setting various HTTP headers
- [Mapbox JS](https://docs.mapbox.com/help/glossary/mapbox-js/) - interactive maps for websites
- [method-override](https://www.npmjs.com/package/method-override) - supports HTTP verbs such as PUT or DELETE in places where the client doesn't support it
- [Mongoose](https://mongoosejs.com/) - schema-based modeling for application data
- [Passport](http://www.passportjs.org/) - Express-compatible authentication middleware for Node.js
- [Starability](https://github.com/LunarLogic/starability) - accessible rating forms with animations

