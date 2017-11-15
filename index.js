var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log(req.headers);
  res.send('hello world');
});

app.get('/@:userhandler', function(req, res) {
  res.redirect('http://beta.speev.com/' + req.params.userhandler);
})


app.listen(3000);