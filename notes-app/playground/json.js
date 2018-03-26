// var obj = {
//   name: 'Ben'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name": "Ben","age": 28}';
// var person = JSON.parse(personString);

// console.log(typeof(person));
// console.log(person);

const fs = require( 'fs' );

const originalNote = {
  title: 'Some title',
  body: 'Some body'
}

const originalNoteString = JSON.stringify( originalNote );

fs.writeFileSync( 'notes.json', originalNoteString );

const noteString = fs.readFileSync( 'notes.json' );

const note = JSON.parse( noteString );

console.log( typeof ( note ) );
console.log( note.title );