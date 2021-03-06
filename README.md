# Budget Tracker

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

This budget tracker uses [MongoDB](https://www.mongodb.com/) to record transactions. Users can add or subtract amounts from their total, and can even make transactions while offline that will be stored in the cache and uploaded when they come back online. The live application can be found [here](https://infinite-brook-51138.herokuapp.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Challenges](#challenges)
- [Contact](#contact)

## Installation

Use 'npm i' or 'npm install' to install the required packages. Then use the command 'npm start' to run the server. Navigate to your localhost port and you should see the page.

## Usage

Enter your transaction amount and a name for your transaction (e.x. "lunch"). Then hit the add (or subtract) funds button. Your total at the top will be updated, the transaction will be recorded in a list, and you will see a graph that tracks your total over time.

## Demonstration

![demo video](./assets/budget-tracker-example.gif)

## Challenges

I had a problem getting this to work correctly on Heroku at first. The api routes would return with a 503 status and I wasn't sure why. Turns out I had a whitelist restriction and needed to add 0.0.0.0/0 to my IP whitelist. Now it seems to work fine, as it did in localhost. Other than that, this assignment wasn't too bad. It's interesting using MongoDB Atlas, instead of JawsDB like we have been using for a lot of assignments.

## Contact

I can be reached here on GitHub at [brenhamp](https://github.com/brenhamp) if you have any questions or comments.
