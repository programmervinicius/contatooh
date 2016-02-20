//node-server.js

var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/plain'
	});
	res.end('Sou um servidor criado pelo node.js!\n');
}).listen(3000, '127.0.0.1');
