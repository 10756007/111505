var express = require('express');
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var route = require('./routes/index');
// var users = require('./routes/users');

var routes = require('./routes/index');

var mysql = require("mysql");

var con = mysql.createConnection({
    host : '140.131.114.242',
    user : '111505',
    password : '@Imd505111',
    database : '111-SuShi',
    prot : 3306
});

con.connect(function(err){
    if(err){        
        console.log('connecting error');
        return;
    }
    console.log('connecting success');
});

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // View engine setup 樣本引擎，預設為jade

app.use(express.static('public/images'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use('/index'.indexRouter);

app.use(function(req, res, next){
    req.con = con ;
    next();
})

app.use('/',routes);

app.get('/', function (req, res) {
    res.render('index');
  });


// catch 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
//   error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
  });
  

  app.listen(3000, function () {
    //console.log('Example app listening on port 3000!');
    console.log('');
  });


  module.exports = app;
