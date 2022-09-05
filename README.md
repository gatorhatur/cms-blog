# Brain Dump - Your thoughts your way

## Purpose

Demonstrates usage theory and implementation of model/view/controller, building and connecting a front end to a database. This application will expose API routes that interact with a mySQL backend

## Built with

- mySQL
- Sequelize
- Express
- Handlebars

## Setup Locally

### Getting Started

- Install mySQL Community Server - [mySQL Community Download]('https://dev.mysql.com/downloads/mysql/')
- Clone this repo - `git clone https://github.com/gatorhatur/cms-blog.git`
- Install the dependencies with - `npm i`
- Create a .env file containing values for DB_USER,DB_PW. Add DB_NAME='cms_blog_db' to target the correct database

### Create the Database

- From PowerShell or Command Prompt navigate to the 'db' directory of the cloned repo and log into mysql - `mysql -u root -p`
- Create the database - `source schmea.sql`

### You're Ready!

- From the ../cms-blog directory - `npm start`
- Use an api tool such as Insomnia or Postman to test the apis or go directly to the [local site](http://localhost:3001)

## Links

[Live Site](https://dry-temple-71730.herokuapp.com/)<br>
[Checkout the Code](https://github.com/gatorhatur/cms-blog)
