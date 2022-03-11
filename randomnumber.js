var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = Math.floor((Math.random()*Number(q.max) + Number(q.min)));
  res.end(txt.toString());
}).listen(8080);

//http://localhost:8080/?min=30&max=60