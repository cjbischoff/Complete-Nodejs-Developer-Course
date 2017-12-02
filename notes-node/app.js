console.log('Starting App.');

// load module functionality to be used
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

// Warnings for this code
// fs.appendFile('greetings.txt', 'Hello-World');
// No warnings
// fs.appendFileSync('greetings.txt','Hello' + user.username + '!');
fs.appendFileSync('greetings.txt',` Hello ${user.username} ! `);

