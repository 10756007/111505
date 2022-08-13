var express = require('express');
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // View engine setup 樣本引擎，預設為jade


app.use(express.static('public/images'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('index');
  });


// catch 404
app.use(function(req, res, next) {
    next(createError(404));
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
    console.log('Example app listening on port 3000!');
  });


  module.exports = app;
