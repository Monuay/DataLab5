let http = require('http');
let url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
/*Use the url module to turn the querystring into an object:*/
var q = url.parse(req.url, true).query;
/*Return the year and month from the query object:*/
var txt = "Name : " + q.name + " " + "<br/>Login Date : "+ q.month + " " + q.day + ", " + q.year;
res.end(txt);
}).listen(9999);