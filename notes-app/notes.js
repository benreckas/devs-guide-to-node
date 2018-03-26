console.log( 'Starting notes.js' );

const fs = require( 'fs' );

const logNote = (note) => {
  console.log('--');
  console.log(note.title);
  console.log(note.body);
}

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync( 'notes-data.json' )
    return JSON.parse( notesString );
  } catch ( err ) {
    return [];
  }
}

const saveNotes = ( notes ) => {
  fs.writeFileSync( 'notes-data.json', JSON.stringify( notes ) );
}

const addNote = ( title, body ) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  const duplicateNotes = notes.filter( note => note.title === title );

  if ( duplicateNotes.length === 0 ) {
    notes.push( note );
    saveNotes( notes );
    return note;
  }
}

const getAll = () => {
  return fetchNotes();
}

const getNote = ( title ) => {
  let notes = fetchNotes();
  const filteredNotes = notes.filter( note => note.title === title );
  return filteredNotes[0];
}

const removeNote = ( title ) => {
  let notes = fetchNotes();
  const filteredNotes = notes.filter( note => note.title !== title );
  saveNotes( filteredNotes );
  return notes.length !== filteredNotes.length;
}

module.exports = {
  logNote,
  addNote,
  getAll,
  getNote,
  removeNote
}