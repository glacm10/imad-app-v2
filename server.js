//Importing software packages
var express = require('express'); //express library is used for craete server, no need to worry about how to create port and handling http req 
var morgan = require('morgan'); //output logs of a sever .i.e. what req are coming in and we responding
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res)  //if  /ui/style.css this url requested then this function (req, res) will execute
{       
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/communitiies', function (req, res) {
  res.send('BMC Community URL- https://www.communities.bmc.com/');
});
app.get('/supportcentral', function (req, res) {
  res.send('BMC Support Central URL- https://www.support.bmc.com/');
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
