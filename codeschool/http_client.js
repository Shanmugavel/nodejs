var http = require("http");

var hostname = "localhost";
var port_no = 8080;
var http_method = "GET";
var path = "/";

var options = {
  "hostname" : hostname,
  "port" : port_no,
  "path" : path,
  "method" : http_method,
  "headers" : {
    "Content-Type": "application/x-www-form-urlencoded"
  }

};
var req = http.request(options, function(resp) {
  console.log("Resp StatusCode:" + resp.statusCode);
  resp.on("data", function(chunk) {
    console.log("Response Body::" + chunk);
  });
});
req.on("error", function(err) {
  console.error("Error::" + err.message);
});

req.end();
console.log("Request Submitted!");
