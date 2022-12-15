const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const mysql = require('mysql');
const db_option = 
        {
        host: '140.131.114.242',
        user: '111505',
        password: '@Imd505111',
        database: '111-SuShi',
        prot: 3306
        };
const port = 8787
var TID = []
var TPassword = []
var Temail = []
var Tverificationcode = []
const passport = require('passport');

app.use(express.static('public/img'));
app.use(express.urlencoded({extended: false}))

app.post("/register", async (req, res) => {
    try {
        const connection = mysql.createConnection(db_option);       
        if(req.body.password === req.body.repassword){
        } else {
            res.render('111505-register.ejs',{message:0,messageage:0});
            return;
        }
        connection.query(`SELECT * FROM Users where ID = '${req.body.username}'`, function(err, rows, fields){
            if(err) throw err;
            if(rows.length > 0){
                console.log('不能註冊');
                res.render('111505-register.ejs',{message:rows.length});
            } else {
                // console.log('可註冊');
                const connection = mysql.createConnection(db_option);
                connection.connect(function(err) {
                    if (err) throw err;
                    connection.query(`INSERT INTO Users (ID,UserEmail,UserPassword,verificationcode) VALUES ('${req.body.username}','${req.body.useremail}','${req.body.password}','')`, function (err, result) {
                      if (err) throw err;
                      console.log("新增進去");
                      connection.end(function(err) {});
                      res.redirect("/register2")
                    });
                  });
            }
          });
    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})

app.post("/login", async (req, res) => {
    try {
        const connection = mysql.createConnection(db_option);       
        TID.push({
            id: req.body.username,
        })
        TPassword.push({
            password: req.body.password,
        })
        console.log(TID);
        console.log(TPassword);
        connection.query(`SELECT * FROM Users where ID = '${req.body.username}' and UserPassword = '${req.body.password}'`, function(err, rows, fields){
            if(err) throw err;
            if(rows.length < 1){
                console.log('密碼錯誤');
                res.render('111505-login.ejs',{message:rows.length});
            } else {
                console.log('密碼正確');
                connection.end(function(err) {});
                res.redirect("/choose")
            }
            console.log(rows.length);
            console.log(rows);
          });
        
    } catch (e) {
        console.log(e);
        res.redirect("/login")
    }
})

app.post("/forget_password", async (req, res) => {
    try {
        const connection = mysql.createConnection(db_option);
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
              user: '111505sushi@gmail.com',
              pass: 'wmmrcnwvikliiqfa',
            },
          });
        Temail.push({
            email: req.body.useremail, 
        })
        TID.push({
            id: req.body.username,
        })
        console.log(Temail);
        console.log(TID);
        connection.query(`SELECT * FROM Users where UserEmail = '${req.body.useremail}' and ID = '${req.body.username}'` , function(err, rows, fields){
            if(err) throw err;
            if(rows.length < 1){
                console.log('沒有這個信箱');
                res.render('111505-forget_password.ejs',{message:rows.length});
            } else {
                const random1 = Math.floor(Math.random()*50);
                console.log('有這個信箱');
                transporter.sendMail({
                    from: '"享狩獅" <111505sushi@gmail.com>',
                    to: req.body.useremail,
                    subject: '驗證碼',
                    html: `請輸入此驗證碼: ${random1}`,
                  }).then(info => {
                    console.log({ info });
                  }).catch(console.error);
                const connection = mysql.createConnection(db_option);
                connection.connect(function(err) {
                    if (err) throw err;
                    connection.query(`UPDATE Users SET verificationcode = '${random1}' WHERE ID = '${req.body.username}'`, function (err, result) {
                    if (err) throw err;
                    connection.end(function(err) {});
                    res.redirect("/forget2")
                    });
                  });
                
            }
            console.log(rows.length);
            console.log(rows);
          });
    } catch (e) {
        console.log(e);
        res.redirect("/forget")
    }
})

app.post("/forget_password2", async (req, res) => {
    try {
        const connection = mysql.createConnection(db_option);
        connection.query(`SELECT * FROM Users where verificationcode = '${req.body.verificationcoded}' and ID = '${req.body.username}'` , function(err, rows, fields){
            if(err) throw err;
            if(rows.length < 1){
                console.log('沒有這個驗證碼');
                res.render('111505-forget_password2.ejs',{message:rows.length});
            } else {
                res.redirect("/forget3")
            }
          });
    } catch (e) {
        console.log(e);
        res.redirect("/forget2")
    }
})

app.post("/forget_password3", async (req, res) => {
    try {
        const connection = mysql.createConnection(db_option);
        connection.query(`SELECT * FROM Users where ID = '${req.body.username}'` , function(err, rows, fields){
            if(err) throw err;
            if(rows.length < 1){
                console.log('沒有這個帳號');
                res.render('111505-forget_password.ejs',{message:rows.length});
            } else {
                const connection = mysql.createConnection(db_option);
                connection.connect(function(err) {
                    if (err) throw err;
                    connection.query(`UPDATE Users SET UserPassword = '${req.body.password}' , verificationcode = '' WHERE ID = '${req.body.username}'`, function (err, result) {
                    if (err) throw err;
                    connection.end(function(err) {});
                    res.redirect("/forget4")
                    });
                  });
                
            }
            console.log(rows.length);
            console.log(rows);
          });
    } catch (e) {
        console.log(e);
        res.redirect("/forget3")
    }
})


app.get('/', (req,res) => {
    res.render("111505-home.ejs")
})

app.get('/login', (req,res) => {
    res.render("111505-login.ejs",{message:1})
})

app.get('/register', (req,res) => {
    res.render("111505-register.ejs",{message:0,messageage:1})
})

app.get('/register2', (req,res) => {
    res.render("111505-register2.ejs")
})

app.get('/forget', (req,res) => {
    res.render("111505-forget_password.ejs",{message:1})
})

app.get('/forget2', (req,res) => {
    res.render("111505-forget_password2.ejs",{message:1,message1:""})
})

app.get('/forget3', (req,res) => {
    res.render("111505-forget_password3.ejs",{message:1})
})

app.get('/forget4', (req,res) => {
    res.render("111505-forget_password4.ejs")
})

app.get('/choose', (req,res) => {
    res.render("111505-choose.ejs")
})

app.get('/screen', (req,res) => {
    const connection = mysql.createConnection(db_option);
    const query =   
    'SELECT Chinese_Name,sum(Quantity)/count(Chinese_Name)as Quantity FROM Sushi_amount AS a \
    right join Amount AS b on a.Class = b.Class \
    group by Chinese_Name \
    order by length(Chinese_Name);';
    connection.query(query, function(err, rows, fields){
      if(err) throw err;
      var data = rows;
      res.render('111505-infield_screen.ejs',{data:data});
    });
    connection.end(function(err) {});
})

app.listen(port)