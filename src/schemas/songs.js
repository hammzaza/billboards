var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songsSchema = new Schema({
  name:String,
  genre:String,
  upload:String,
  description:String,
  tags:String,
  uploadlink:String,
  views:Number
});
module.exports = mongoose.model('Songs', songsSchema);
