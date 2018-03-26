console.log('Starting App');

// Add third party and built in modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Add our own files
const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}