var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
app.get('/', function(req, res){
  console.log(req.headers);
  res.redirect('http://beta.speev.com');
});

app.get('/:email', function(req, res) {
  res.redirect('http://beta.speev.com/' + req.params.userhandler);
})

app.listen();