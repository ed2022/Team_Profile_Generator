//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const fs = require('fs'); // requiring so that we can build the HTML File

//REQUIRE THE MAIN JS FILES 
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const console = require('console');

//DEFINE A PLACE TO HOLD NEW DATA 
var newPeople = [];

//initial message: 
console.log(`\nWelcome to the team generator!\nPlease build your team by answering the following questions below: \n`);

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
    }
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
      name: 'gitHub',
      message: 'What is the team Engineer\'s GitHub Username?',
    }
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
      name: 'school',
      message: 'What is the team Intern\'s school?',
    }
]; 
const pickAPerson = [  {
    type: 'list',
    name: 'add',
    message: 'Which type of team member would you like to add? ',
    choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
  }
]
// To pick Role
function menu(){
  inquirer
  .prompt(pickAPerson)
  .then((data) => {
      if(data.add === 'Engineer'){
        questions = EngineerQues;
        que(questions, "Engineer");  
      }
      else if (data.add === 'Intern'){
        questions = InternQues;   
        que(questions,"Intern");  
      } 
      else{
       console.log('List: ', newPeople);
       htmlMaker(newPeople);
    }
  })
}
//Assigning the function of prompt to it's respectable set of question
var questions = managerQues;
que(questions , "Manager");
//Causing the inquire to begain
function que(arrayQue, employeeType) {
    inquirer
        .prompt(arrayQue)
        .then((data) => {
            if(employeeType === "Manager"){ var mangInfo = new Manager(data.name, data.id, data.email, data.officeNumber); newPeople.push(mangInfo);}
            else if(employeeType=== "Engineer"){ var engInfo = new Engineer(data.name, data.id, data.email, data.gitHub); newPeople.push(engInfo);}
            else {var internInfo = new Intern(data.name, data.id, data.email, data.school); newPeople.push(internInfo);}
            menu(); 
        });  
}
//To generate the HTML file
function htmlMaker(arrayList){  
    fs.writeFile('index.html', generateHTML(arrayList), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}
