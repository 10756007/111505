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
  database: '111-SuShi',
  prot: 3306
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("hi!");
// });


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Product", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

app.get('/', function (req, res) {
  res.render('index',{
    name1: '鮭魚壽司',
    name2: '鮪魚壽司',
    name3: '旗魚壽司',
    name4: '鮮蝦壽司',
    name5: '扇貝壽司',
    name6: '鮭魚卵壽司',
    name7: '蝦卵壽司',
    name8: '稻荷壽司',
    name9: '干貝壽司',
    name10: '玉子燒壽司',
    amount1: '18',
    amount2: '17',
    amount3: '15',
    amount4: '14',
    amount5: '14',
    amount6: '12',
    amount7: '12',
    amount8: '11',
    amount9: '9',
    amount10: '8',
  });
});

app.listen(3000, function() {
  console.log('連接成功');
});