'use strict';

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
// User Type
exports.song = new GraphQLObjectType({
  name: 'songs',
  fields: function fields() {
    return {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      genre: {
        type: new GraphQLNonNull(GraphQLString)
      },
      tags: {
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        type: new GraphQLNonNull(GraphQLString)
      },
      uploadlink: {
        type: new GraphQLNonNull(GraphQLString)
      }
    };
  }
});