var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var text = "<h1>deneme</h1> <p> first server application</p>"
  res.end(text);
}).listen(8080);