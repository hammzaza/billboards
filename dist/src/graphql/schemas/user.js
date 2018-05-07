'use strict';

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
// User Type
exports.user = new GraphQLObjectType({
  name: 'users',
  fields: function fields() {
    return {
      username: {
        type: new GraphQLNonNull(GraphQLString)
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      email: {
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        type: new GraphQLNonNull(GraphQLString)
      },
      check: {
        type: new GraphQLNonNull(GraphQLBoolean)
      }
    };
  }
});