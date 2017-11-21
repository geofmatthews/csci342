var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.get('/use_public', function(req, res){
    res.render('use_public');
});

app.listen(3000);
