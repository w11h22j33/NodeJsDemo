var http = require('http');

http.get("http://api.hostip.info/get_json.php", function(res) {
    console.log("Received response: " + res.statusCode);
});

var req = http.request("http://api.hostip.info/get_json.php",function(res) {
    console.log("Request began");
    var output = '';

    res.on('data', function (chunk) {
        output += chunk;
    });

    res.on('end', function () {
        console.log('Request complete:');
        console.log(output);
    });
});

req.on('error', function (err) {
    console.log(err);
    //console.log('error: ' + err.message);
});

req.end();
console.log("Script complete");