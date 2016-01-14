// express dependency for our application
var express = require('express')
// loads mongoose dependency
var mongoose = require('mongoose')
var passport     = require('passport');
// loads dependency for middleware for paramters
var bodyParser = require('body-parser')
var session = require('express-session');
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override')
var request = require('request')
// loads module containing all authors contrller actions. not defined yet...
var commentsController = require("./controllers/commentsController")
// connect mongoose interfaces to reminders mongo db
var mongodbUri = 'mongodb://localhost/baseballvisuals';
mongoose.connect(process.env.MONGOLAB_URI || mongodbUri)
var app = express()

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// allows for put/delete request in html form
app.use(methodOverride('_method'))
// connects assets like stylesheets
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'FS-VISUALS',
resave: true,
saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// define controller/route
app.use("/", commentsController)

// app server located on port 4000
app.listen(process.env.PORT || 4000, function() {
  console.log("app listening on port 4000")
})
