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

	http.get({host: 'http://api.hostip.info/get_json.php'}, function(res) {
		
		
	  // res.setEncoding('utf8');
		
		
  	  var response = "";
	  
  	  res.on('data', function (chunk) {
		  
  		  console.log('event data ---> ');
		  
  		  response = response + chunk;
		  
  	  });
	  
  	  res.on('end',function(){
	  	
  		console.log('event end ---> ' + response);
		
  	  }); 
	 
	});
	
}

exports.start = start;
exports.upload = upload;
exports.getindex = getindex;