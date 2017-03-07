const express = require('express');
const pug = require('pug');

const app = express();

// SET Pug views
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// USE public directory
app.use(express.static(__dirname + '/public'));

// End point views
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/resources', function(req, res) {
  res.render('resources');
})

app.listen(3000, function(){
  console.log('Site is running at http://localhost:3000');
});