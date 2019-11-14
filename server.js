//VERSION 3 with second GET and a POST
//in the terminal: npm install -g nodemon

//data for now - so we don't have to have a model (database) yet 
var data = { name: "your name", address: "your address", favoriteFood:"your food", petName: "pet name" };
var data2 = { name: "new name", address: "your address", favoriteFood:"your food", petName: "pet name" };

var data3 = {username: "daboi510", password: "GoJackets!"};
var data4 = {username:"daboi510", password: "GoJackets!"};


var mongoose = require('mongoose');

//lower in the doc
mongoose.connect("mongodb+srv://alemargonram:MARIOG510@cluster0-oqhja.mongodb.net/test?retryWrites=true&w=majority");

// mongoose.connect("mongodb+srv://malbinson:malbinson1@cluster0-cvp0r.mongodb.net/test?retryWrites=true&w=majority");





//adding Express and Cors
var express = require('express');
// var cors = require('cors');
var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

require('./routes/routes.js')(app);

app.use(express.static('public'))

//a get at the root.  this is run when you go to localhost:3000

// app.get('/', cors(), function(req, res) {
//     res.render("login.ejs");
// });


// //a get at a new location.  this is run when you go to localhost:3000/data2
// app.get('/data2', cors(), function(req, res) {
//     res.send(data4);
// });

// //a post, this handles anything sent TO the url at localhost:3000/post
// var boi = false;


// app.post('/login', cors(), function(req, res) {


//     console.log(req.body.username); 

//     if(req.body.username == data3.username && req.body.password == data3.password) {
//         // boi = true;
//         res.render('home.ejs', {userObject: data3});

//     }else{
//         // boi = false;
//         res.redirect("/");
//     }
//     // res.send(boi);

// });

//ok, start the server and be ready!
app.listen(3000);
console.log("Listening at localhost:3000");
