console.log('Starting apps.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

//Verbose debugging
console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note,'Note Created');
    } else {
        console.log('ERROR: Note title Taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        notes.logNote(note,'Note Found');
    } else {
        console.log('ERROR: Note Note Found');
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if (typeof command === 'undefined') {
    console.log('No Command');
} else {
    console.log('Command not found');
}
