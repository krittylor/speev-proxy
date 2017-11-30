var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
app.get('/', function(req, res){
  console.log(req.headers);
  res.redirect('http://beta.speev.com');
});

app.get('/:email', function(req, res) {
  res.redirect('http://beta.speev.com/' + req.params.email);
})

server.listen(PORT, '0.0.0.0', () =>
  console.log(`Speev proxy server is now running on http://0.0.0.0:${PORT}`)
);