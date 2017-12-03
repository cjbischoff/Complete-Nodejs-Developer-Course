console.log('Starting apps.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command:', command);

console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note')
} else if (command === 'remove') {
    console.log('Remove note');
} else if (typeof command === 'undefined') {
    console.log('No Command');
} else {
    console.log('Command not found');
}