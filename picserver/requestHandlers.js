function start(){
	console.log("requestHandlers start function was called.")
}

function upload(){
	console.log("requestHandlers upload function was called.")
}

exports.start = start;
exports.upload = upload;