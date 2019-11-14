var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  brand: String,  
  name: String,
  color: String,
  year: Number,
  seats: Number

});


var Car = mongoose.model('Car', carSchema);

module.exports = Car;