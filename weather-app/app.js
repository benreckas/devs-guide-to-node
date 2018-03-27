const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather',
        string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

  const encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, async (err, res) => {
  try {
    if(res.statusCode === 200) {
      console.log(`Address: ${res.body.results[0].formatted_address}`)
      console.log(`Lat: ${res.body.results[0].geometry.location.lat}`)
      console.log(`Lng: ${res.body.results[0].geometry.location.lng}`)
    }
  } catch ( err ) {
    console.log('Invalid Address')
  }

  // console.log(JSON.stringify(res, undefined, 2));
});