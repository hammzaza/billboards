

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
console.log('types/user');
// User Type
exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {
        type: GraphQLString
      },
      valuee:{
        type:GraphQLString
      }
    };
  }
});

