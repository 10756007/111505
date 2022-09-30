var express = require('express');
var router = express.Router();

//var db = require("../config/db");

router.get('/', function (req, res, next) {

    //var sql = `select id,email from emailverification where url=? and type='1'`;
    //con.query(sql, [code], function (err, data) {
    //    if (data.length != '0') {            
    //        res.render('resetpassword');
    //    } else {
    //        res.render('msg', { title: '錯誤', msg: '密碼重設失敗', buttonMsg: '回登入頁', url: '/login' });
    //    }
    //});

    var db = req.con;

    var data = "";

    var sql = `SELECT Chinese_Name FROM Freshness`;
    db.query(sql, function (err, rows) {
        if (err) {
            console.log(err);
        } else {  
            data = rows[0].Chinese_Name;
            // switch (rows[0].Name) {
            //     case "Octopus":
            //         data = "章魚";
            //         break;
            //     case "prawn":
            //         data = "蝦子";
            //         break;
            //     case "Salmon":
            //         data = "鮭魚";
            //         break;
            //     case "Tuna":
            //         data = "鮪魚";
            //         break;
            //     default:
            //         console.log('沒此商品');
            // }
        
            // use index.ejs
            res.render('index', { aaa: data});
        }    
    });
});
module.exports = router;