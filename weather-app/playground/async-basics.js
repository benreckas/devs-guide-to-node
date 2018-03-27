console.log('Starting app.');

setTimeout(() => { console.log('Set timeout...') }, 2000);

setTimeout(() => { console.log('Set timeout number 2...') }, 0);

console.log('Finishing app.');

/*
  RESULT:
  Starting App.
  Finishing App.
  Set timeout number 2...
  Set timeout...
*/