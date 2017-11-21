var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/loggedin', function(req, res){
   res.render('dynamictwo', {
       user : {name : "Geoffrey", age: "99"}
   });
});
app.get('/login', function(req, res){
   res.render('dynamictwo', {
   });
});

app.listen(3000);
