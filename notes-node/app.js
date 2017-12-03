console.log('Starting apps.js');

// load module functionality to be used
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

// Add Note Function
var res = notes.addNote();
console.log(res);

// Add numbers
var sum = notes.addNumbers(5,5);
console.log(sum);

// Add numbers
console.log('Result:',notes.addNumbers(9,-2));

// var user = os.userInfo();
// console.log(user);

// Warnings for this code
// fs.appendFile('greetings.txt', 'Hello-World');

// No warnings
// fs.appendFileSync('greetings.txt','Hello' + user.username + '!');

// Better way
// fs.appendFileSync('greetings.txt',` Hello ${user.username}! You are ${notes.age}.`);

