var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  description:{
      type:String,
      required:true
  },
  tags:{
      type:String,
      required:true
  }
});
module.exports = mongoose.model('Songs', songsSchema);
