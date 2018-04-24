var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var userType = require('../types/user').userType;
var objectid = require('mongodb').ObjectID;
var UserModel = require('../../models/user');
exports.find = {
    type: new GraphQLList(userType),
    args: {
        name: {
          type:  GraphQLString,
        },
      },
    resolve(root, params) {
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
};