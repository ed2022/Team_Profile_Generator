# Team_Profile_Generator

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## Technology Used for Development
- Java Script
- Inquirer
- fs
- Node.js
- jest
- BootStrap 
- Html

## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Criteria Provided By Client 
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
All that is required is to have the following in your terminal: 
- npm install 
- npm i inquirer fs
- node index.js

## Tests
For this application, there are 4 tests to run to make sure that we are getting our expected data. To test this, please type "npm run test" in your terminal.

## Navigation and Demo 
As soon as you finsih the install, you will then prompted a series of questions that will allow you to create and see your team members in an HTML page. 

Please do make sure to answer every question to make it as detailed and profession as possible. 

To see how it is done, please view the following video/gif of how to use this application since it is not in the browser but rather a local file. 

![How the app works.](Assets/team.gif) 

## Resources
- [Jest](https://www.npmjs.com/package/jest)
- [Inquirer](https://www.npmjs.com/package/inquirer)

## Links 
- Video link: 
- GitHub repositor: https://github.com/ed2022/Team_Profile_Generator.git