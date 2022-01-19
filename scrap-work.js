//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const fs = require('fs'); // requiring so that we can build the HTML File 

//REQUIRE THE MAIN JS FILES 
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
// const Manager = require('./lib/Manager.js');

//DEFINE A PLACE TO HOLD NEW DATA 
const newPeople = [];

//initial message: 
console.log(`\nWelcome to the team generator!\nUse \`npm run reset\` to reset the dist/folder\n\nPlease build your team by answering the following questions below: `); 

//Prep Questions 
const managerQues = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager\'s id? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email? ',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
    },
    {
      type: 'list',
      name: 'add',
      message: 'Which type of team member would you like to add? ',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
]; 
const EngineerQues = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team Engineer\'s name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team Engineer\'s id? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team Engineer\'s email? ',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team Engineer\'s GitHub Username?',
    },
    {
      type: 'list',
      name: 'add',
      message: 'Which type of team member would you like to add? ',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
]; 
const InternQues = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team Intern\'s name? ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team Intern\'s id? ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team Intern\'s email? ',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team Intern\'s school?',
    },
    {
      type: 'list',
      name: 'add',
      message: 'Which type of team member would you like to add? ',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
]; 

//Assigning the function of prompt to it's respectable set of question
var questions = managerQues;
que(questions);

//Causing the inquire to begain
function que(arrayQue) {
    inquirer
        .prompt(arrayQue)
        .then((data) => {

            newPeople.push(data); 

            if(data.add === 'Engineer'){
                questions = EngineerQues;
                que(questions);  
            }
            else if (data.add === 'Intern'){
                questions = InternQues;   
                que(questions);  
            } 
            else{
               console.log('List: ', newPeople);
               htmlMaker(newPeople);
            }
        });  
}

console.log('List: ', newPeople);

function htmlMaker(arrayList){  
    fs.writeFile('index.html', generateHTML(arrayList), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}
