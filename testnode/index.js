var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public/img'));
app.use(express.static('files'));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

var mysql = require('mysql');

var con = mysql.createConnection({
  host: '140.131.114.242',
  user: '111505',
  password: '@Imd505111',
  database: '111-Sushi',
  /*prot :3306*/
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function (req, res) {
  res.render('index',{
    game: '鮪魚壽司'
  });
});

app.listen(3000, function() {
  console.log('連接成功');
});