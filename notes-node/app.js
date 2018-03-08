// console.log('Starting apps.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Content of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a single note',{
    title: titleOptions
})
.command('remove', 'Delete a single note',{
    title: titleOptions
})
.help()
.argv;
var command = argv._[0];

// Verbose debugging
// console.log('Command:', command);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note, 'Note Created');
    } else {
        console.log('ERROR: Note title Taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s). `);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        notes.logNote(note, 'Note Found');
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
