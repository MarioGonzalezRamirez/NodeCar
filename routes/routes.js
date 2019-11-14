var data3 = {username: "daboi510", password: "GoJackets!"};


var User = require('../models/user.js');

var Car = require('../models/car.js');

// var Cat = require('../models/cat.js');



module.exports = function(app) {
    //a get at the root.  this is run when you go to localhost:3000

    app.get('/', function(req, res) {
        res.render("login.ejs");
    });


    //a get at a new location.  this is run when you go to localhost:3000/data2
    app.get('/data2', function(req, res) {
        res.send(data3);
    });

    //a post, this handles anything sent TO the url at localhost:3000/post
    var boi = false;


    app.get('/list', function(req,res) {

        User.find({}, function(err,users) {
            console.log(users)
            res.render("displayList.ejs",{results:users})
        })

    })







    app.post('/login', function(req, res) {

        User.findOne({ userName: req.body.username, password: req.body.password}, function(err, user) {
            if(user){
                console.log("Found a user")
                currentUser = user
                res.render("home.ejs",{user:user})
            } else {
                var u = new User({userName:req.body.username,password:req.body.password})
                u.save(function(err,user) {
                    console.log("Made a user:" + user)
                    currentUser = user
                    res.render("login.ejs",{user:user})
                    console.log("Username and Password Sucessfully Saved")    
                })

            }
            
        })



  


        app.post("/addAttributes", function(req,res){

            User.findOne({userName: currentUser.userName}, function(err, user){
                console.log(user)
                user.name = req.body.name
                user.age = req.body.age
                user.save(function(err, newUser){
                    res.render('home.ejs',{user:user})
                })
            })
        })
    });

    app.post('/home', function(req, res) {


        // Car.findOne({ brand:req.body.brand,name:req.body.name,color:req.body.color,year:req.body.year,seats:req.body.seats}, function(err, car) {
        //     if(car){
        //         console.log("Found a car")
        //         currentCar = car
        //         res.render("home.ejs",{car:car})
        //     } else {
            var u = new Car({brand:req.body.brand,name:req.body.name,color:req.body.color,year:req.body.year,seats:req.body.seats})
                
                currentUser.cars.push(u)

                currentUser.save(function(err,car) {
                    console.log("Made a user:" + car)
                    //currentCar = car
                    res.render("home.ejs",{car:car})
                    console.log("Car Sucessfully Saved")    
                })

               // console.log(currentUser)

            
            
       // })

    });

    app.get('/carList', function(req,res) {


        User.findOne({ userName: currentUser.userName}, function(err, user) {
            res.render("displyCarList.ejs",{results: user.cars })
        })
    
    })

    app.get('/logBack', function(req, res){
        res.render("login.ejs")
    })

    app.get('/homeBack', function(req, res){
        res.render("home.ejs")
    })


    // app.post('/addCat', function(req, res) {


    //     Cat.findOne({name:req.body.name,breed:req.body.breed,image:req.body.image,age:req.body.age}, function(err, cat) {
    //         if(cat){
    //             console.log("Found a cat")
    //             currentCat = cat
    //             res.render("home.ejs",{cat:cat})
    //         } else {
    //             var u = new Cat({name:req.body.name,breed:req.body.breed,image:req.body.image,age:req.body.age})
    //             u.save(function(err,cat) {
    //                 console.log("Made a user:" + cat)
    //                 currentCat = cat
    //                 res.render("home.ejs",{cat:cat})
    //                 console.log("Car Sucessfully Saved")    
    //             })

    //         }
            
    //     })

    // });
 
}
