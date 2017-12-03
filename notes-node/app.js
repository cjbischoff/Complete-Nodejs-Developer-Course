console.log('Starting apps.js');

// load module functionality to be used
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');


// Add Note Function
// var res = notes.addNote();
/// console.log(res);

// Add numbers
// var sum = notes.addNumbers(5,5);
// console.log(sum);

// Add numbers
// console.log('Result:',notes.addNumbers(9,-2));

// var user = os.userInfo();
// console.log(user);

// Warnings for this code
// fs.appendFile('greetings.txt', 'Hello-World');

// No warnings
// fs.appendFileSync('greetings.txt','Hello' + user.username + '!');

// Better way
// fs.appendFileSync('greetings.txt',` Hello ${user.username}! You are ${notes.age}.`);

// Testing/using lodash
console.log(_.isString(true));
console.log(_.isString('Christopher'));
// Cleaning DUPs
var filterArray = _.uniq(['christopher',1,'christopher',1,2,3,4,5,3,2,1]);
console.log(filterArray);
