//importing node framework
var express = require('express');
 
var app = express();

//Respond with "hello back again codebasetn to ci-cd expressy!!!" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello back again codebasetn to ci-cd expressy!!!');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000...') ;

module.exports = app;
