//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const fs = require('fs'); // requiring so that we can build the HTML File

//REQUIRE THE MAIN JS FILES 
const generateHTML = require('./src/generateHTML');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
// const Manager = require('./lib/Manager.js');

//DEFINE A PLACE TO HOLD NEW DATA 
var newPeople = [];

//initial message: 
console.log(`\nWelcome to the team generator!\nUse \`npm run reset\` to reset the dist/folder\n\nPlease build your team by answering the following questions below: `);

//Prep Questions 
const employeeQue = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the person you would like to add? ',
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is the role of this person on the team?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the team member\'s id? ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team member\'s email? ',
  }
]
const managerQues = [
  {
    type: 'input',
    name: 'unique',
    message: 'What is the team manager\'s office number?',
  },
  {
    type: 'list',
    name: 'add',
    message: 'Whould you like to add another memember',
    choices: ['Yes', 'No'],
  },
];
const EngineerQues = [
  {
    type: 'input',
    name: 'unique',
    message: 'What is the team Engineer\'s GitHub Username?',
  },
  {
    type: 'list',
    name: 'add',
    message: 'Whould you like to add another memember',
    choices: ['Yes', 'No'],
  },
];
const InternQues = [
  {
    type: 'input',
    name: 'unique',
    message: 'What is the team Intern\'s school?',
  },
  {
    type: 'list',
    name: 'add',
    message: 'Whould you like to add another memember',
    choices: ['Yes', 'No'],
  },
];

//Assigning the function of prompt to it's respectable set of question
que(employeeQue);

//Causing the inquire to begain
function que(arrayQue) {
  inquirer
    .prompt(arrayQue)
    .then((data) => {

      if (data.role === 'Manager') {
        questions = managerQues;
        que(questions);
        newPeople.push(data);
      }
      else if (data.role === 'Engineer') {
        questions = EngineerQues;
        que(questions);
        newPeople.push(data);
      }
      else if (data.role === 'Intern') {
        questions = InternQues;
        que(questions);
        newPeople.push(data);
      }
      else {
        if(data.add == "Yes"){
          que(employeeQue);
        }
        else{
          //console.log("List: ", newPeople);
          htmlMaker(data);
        }
      }
      
    });
}

function htmlMaker(arrayList) {
  fs.writeFile('index.html', generateHTML(arrayList.map), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}
