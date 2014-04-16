var exec = require("child_process").exec;

function start(response){
	console.log("requestHandlers start function was called.")
	
	// sleep(5000);
	// return "Hello Start!!!";
	
	exec("find /",{ timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	});
}

function upload(response){
	console.log("requestHandlers upload function was called.")
	
	response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello Upload!!!");
	  response.end();
}

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

exports.start = start;
exports.upload = upload;