var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songsSchema = new Schema({
  name:String,
  genre:String,
  description:String,
  tags:String,
  uploadlink:String

});
module.exports = mongoose.model('Songs', songsSchema);
