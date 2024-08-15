const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());


// SET COOKIES CODE ------------
// app.get("/", function (req, res) {
//     res.cookie("name", "Aditya");
//     res.send("done");
// })

// BCRYPT CODE ------------
// app.get("/", function (req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("Password", salt, function(err, hash) {
//            console.log(hash);
           
//         });
//     });
// })

// BCRYPT PASSWORD AND HASH COMPARE CODE ------------
// app.get("/", function (req, res ) {
//     bcrypt.compare("Password", "$2b$10$r388wJaW1ldXWT3zAIqv2ObmSjVWeJFs9xBZOJUX1YYyI4Bg/GeKq", function(err, result) {
//         console.log(result);
        
//     });
// })


// JWT TOKEN CODE ------------
app.get("/", function (req, res ) {
    let token = jwt.sign({email: "aditya@gamil.com"}, "secret");
    res.cookie("token", token); 
    console.log(token);
    res.send("DONE!!");  
})


// DECRYPT, ENCRYPT DATA USING JWT TOKEN CODE ------------
app.get("/read", function ( req, res ) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
}); 



app.listen(3000);