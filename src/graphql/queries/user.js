
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var userType = require('../types/user').userType;
var objectid = require('mongodb').ObjectID;
var UserModel = require('../../models/user');
console.log('queries/user')
// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        args: {
          name: {
            type:  GraphQLString,
          },
        },
        resolve: function (root,params) {
          if (params.name !="")
            users = UserModel.find({name:params.name}).exec();
          else
            users = UserModel.find().exec();
          console.log(users);
          if (!users) {
            throw new Error('Error');
          }
          return users;
        }
      }
    }
  }
});

