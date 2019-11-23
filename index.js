// var http = require('http');
// // console.log(http);

// function callbackregister(req,res){
//     //handle
//     console.log(req);

//     res.statusCode = 200;
//     res.end('This is homepage');
// }

// function callbackregister1(req,res){
//     //handles
//     console.log(req);

//     res.statusCode = 201;
//     res.end('Welcome to the next page');
// }

// //handle request
// var application = http.createServer(callbackregister);

// console.log('Server running on 3090');
// application.listen(3090);

// //handle request
// var application1 = http.createServer(callbackregister1);

// console.log('Server running on 3091');
// application1.listen(3091);


var express = require('express');

var app = express();

console.log(app);

function cb(req,res,next){
    console.log('in registration');

    var x = {name: "Deepak Maharjan",test:'Received'}
    res.json(x);
    res.status(200);
    }

app.get('/booking',
    function(req,res,next){
        console.log('In the first middleware do something');
        next();
    },
    function(req,res,next){
        console.log('In the second middleware // send something');
        res.status(200);
        next();
    },
);



app.get('/registration', cb);

app.listen(3045);