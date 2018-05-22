//var express= require('express');
//var app = express();
//app.listen(8888);

var express = require('express'),
 app = express(),
 port = process.env.PORT || 3000;
app.listen(port);
console.log('RESTful API server started on: ' + port);