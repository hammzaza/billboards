var addUser = require('./add').add;
var removeUser = require('./remove').remove;
var updateUser = require('./update').update;
var findOne = require('./find').find
console.log('mutations/index')
module.exports = {
  addUser,
  removeUser,
  updateUser,
  findOne
}