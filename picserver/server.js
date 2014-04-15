var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route) {
	function onRequest(request,response) {
		
		var pathname = url.parse(request.url).pathname;
		
		console.log("Request received from " + pathname);
		
		route(pathname);
		
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello " + pathname);
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log("Server has started.");
}

exports.start = start;