// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const question = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description.",
    name: "Description"
}, {
    type: "input",
    message: "What does the user need to install to run this app?",
    name: "Installation"
}, {
    type:"input",
    message:"Table of Contents",
    name:"Table of Contents"
}, {
    type:"input",
    message:"How will the app be used?",
    name:"Usage"
}, {
    type:"input",
    message:"What licence is being used?",
    name:"License"
}, {
    type:"input",
    message:"Who contributed to the project?",
    name:"Contributing"
}, {
    type:"input",
    message:"What commands are needed to test this app?",
    name:"Tests"
}, {
    type:"input",
    message:"Input your contact information for inquiries.",
    name:"Questions"
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}
// Function call to initialize app
init();



