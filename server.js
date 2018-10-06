// require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes
const routes = require('./controllers/burgers_controller.js');
// Grant server access to routes
app.use(routes);

// Start server listening 
app.listen(PORT, () => {
  console.log('here is your server bro: http://localhost:' + PORT)
});


/*
var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog handlebars file.
  // Lucky for us, animals[0] is an object!

  // 1. send the dog object from the animals array to the dog handlebars file.
  res.render("dog", animals[0]);
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  var data = {
    animals: []
  };

  for (var i = 0; i < animals.length; i += 1) {
    // Get the current animal.
    var currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (currentAnimal.pet) {
      // If so, push it into our data.animals array.
      data.animals.push(currentAnimal);
    }
  }

  res.render("index", data);
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
  var data = {
    animals: []
  };

  for (var i = 0; i < animals.length; i += 1) {
    // Get the current animal.
    var currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (!currentAnimal.pet) {
      // If not, push it into our data.animals array.
      data.animals.push(currentAnimal);
    }
  }

  res.render("index", data);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
*/