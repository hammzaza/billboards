var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songsSchema = new Schema({
  name:String,
  genre:String,
  description:String,
  tags:String,
  uploadlink:String,
  views:Number

});
module.exports = mongoose.model('Songs', songsSchema);
