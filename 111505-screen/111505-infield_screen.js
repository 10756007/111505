var express = require('express');
var app = express();
var path = require('path');
var prot = 8787

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
  res.render('111505-home'
  );
  })

app.get('/login', function (req, res) {
  res.render('111505-login'
  );
  })

app.get('/forget', function(req,res){
  res.render('111505-forget_password',
  );
  })

app.get('/register', function (req, res) {
  // var password=document.getElementById("pw")
  // var uppercase=document.getElementById("uppercase")
  // var number=document.getElementById("number")
  // var length=document.getElementById("length")

  // password.onfocus=function(){
  //   document.getElementById("rule").style.display="block";
  // }
  
  // password.onblur=function(){
  //     document.getElementById("rule").style.display="none";
  // }
  res.render('111505-register',
  );
  })

  app.get('/choose', function(req,res){
    res.render('111505-choose',
    );
    })

app.get('/screen', function (req, res) {
  var connection = mysql.createConnection(db_option);
  var query = 'SELECT * FROM Amount';
  connection.query(query, function(err, rows, fields){
    if(err) throw err;
    var data = rows;
    res.render('111505-infield_screen',{data:data});
  });
  })

app.listen(8787, function() {
  console.log('程式啟動');
});