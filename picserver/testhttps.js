var https = require('https');

var options = {
  rejectUnauthorized: false,
  host: 'kyfw.12306.cn',
  port: 443,
  path: '/otn/resources/js/framework/station_name.js',
  method: 'GET',
  headers: {
      accept: '*/*'
  }
};

var req = https.request(options, function(res) {
  console.log(res.statusCode);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});

