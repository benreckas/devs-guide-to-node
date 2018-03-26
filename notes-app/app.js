console.log( 'Starting App' );

// Add third party and built in modules
const fs = require( 'fs' );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );

// Add our own files
const notes = require( './notes' );

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a desired note', {
    title: titleOptions
  })
  .command('remove', 'Remove a desired note', {
    title: titleOptions
  })
  .help()
  .argv;
const command = argv._[ 0 ];
console.log( 'Command: ', command );
console.log( 'Yargs', argv );

if ( command === 'add' ) {
  const note = notes.addNote( argv.title, argv.body );
  if ( note ) {
    console.log( 'Note created' );
    notes.logNote( note );
  } else {
    console.log( 'Note title taken' )
  }
} else if ( command === 'list' ) {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach( note => notes.logNote( note ) );
} else if ( command === 'read' ) {
  const note = notes.getNote( argv.title );
  if ( note ) {
    console.log( 'Note read' );
    notes.logNote( note );
  } else {
    console.log( 'Note not found' )
  }
} else if ( command === 'remove' ) {
  const noteRemoved = notes.removeNote( argv.title );
  noteRemoved ? console.log( 'Note was removed' ) : console.log( 'Note not found' );
} else {
  console.log( 'Command not recognized' );
}