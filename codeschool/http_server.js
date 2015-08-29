var http = require("http");
var server = http.createServer( function(req, resp) {
  resp.writeHead(200, { "Content-Type" : "text/html"});
  resp.write("Hello, this is <B>Shan</B>");
  resp.end();
  console.log("Processed a request successfully!");
}).listen(8080);

console.log("Server is listening!!!");
