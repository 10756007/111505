var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public/img'));
app.use(express.static('files'));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

var mysql = require('mysql');

var db_option = 
  {
  host: '140.131.114.242',
  user: '111505',
  password: '@Imd505111',
  database: '111-SuShi',
  prot: 3306
  };

app.get('/', function (req, res) {
  var connection = mysql.createConnection(db_option);
  var query = 'SELECT * FROM Amount order by quantity desc';
  connection.query(query, function(err, rows, fields){
    if(err) throw err;
    var data = rows;
    res.render('111505-infield_screen',{data:data});
  });
  })

app.listen(3000, function() {
  console.log('程式啟動');
});