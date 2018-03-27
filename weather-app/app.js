const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=3826%20Chessa%20Ln%20Clovis',
  json: true
}, (res, err) => {
  console.log(JSON.stringify(res, undefined, 2));
});