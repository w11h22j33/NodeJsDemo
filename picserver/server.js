var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route,handle) {
	function onRequest(request,response) {
		
		var pathname = url.parse(request.url).pathname;
		
		if("/favicon.ico" === pathname){
			
		}else{
			console.log("Request received from " + pathname);
		
			route(handle,pathname,response);
			
		}
		
	}
	
	http.createServer(onRequest).listen(8888);
	
	console.log("Server has started.");
}

exports.start = start;