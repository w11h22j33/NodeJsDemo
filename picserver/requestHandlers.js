var exec = require("child_process").exec;
var http = require('http');

function start(response){
	console.log("requestHandlers start function was called.")
	
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Submit text" />'+
	'</form>'+
	'</body>'+
	'</html>';
	    response.writeHead(200, {"Content-Type": "text/html"});
	    response.write(body);
	    response.end();
}

function upload(response){
	console.log("requestHandlers upload function was called.")
	
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload!!!");
	response.end();
}

function getindex(response){
	
	console.log("requestHandlers getindex function was called.")
	
	doRequest();
	
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("empty");
	response.end();
}

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

function doRequest(){
	
	var options = {
	  hostname: 'kyfw.12306.cn',
	  port: 80,
	  path: '/otn/resources/js/framework/station_name.js',
	  method: 'POST'
	};

	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	req.write('data\n');
	req.write('data\n');
	req.end();
	
}

exports.start = start;
exports.upload = upload;
exports.getindex = getindex;