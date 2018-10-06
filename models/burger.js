var orm = require('../config/orm.js');

// CreateOne the burger object
var burger = {
  // Select all burger table entries
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  // The variables col and val are arrays.
  create: function (col, val, cb) {
    orm.create("burgers", col, val, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      // console.log(res);
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
/*
  // The variables col and val are arrays
  insertOne: function(col, val, cb) {
    orm.insertOne('burgers', col, val, function(res) {
      cb(res);
    });
  },

  // The objColVal is an object specifying columns as object keys with associated values
  updateOne: function(objColVal, condition, cb) {
    orm.updateOne('burgers', objColVal, condition, function(res) {
      cb(res);
    });
  }

#### Model setup

* Inside your `burger` directory, createOne a folder named `models`.

  * In `models`, make a `burger.js` file.

    * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, createOne the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.
*/