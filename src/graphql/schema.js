import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';
  
var User = require('../schemas/user');
var Songs = require('../schemas/songs');

const Query = new GraphQLObjectType({
name: 'Query',
description: 'Root query object',
fields: () => {
    return {
    users: {
        type: new GraphQLList(User),
        args: {
            email: {
                type: GraphQLString
            }
        },
        resolve (root, params) {
        return User.find({ email: params.email }).exec();
        }
    },
    Songs: {
        type: new GraphQLList(Songs),
        args:{
            genre:{
                type:GraphQLList
            }
        },
        resolve (root, paras4) {
            if (params.genre !="")
                songss = Songs.find({genre:params.genre}).exec();
            else
                songss = UserModel.find().exec();
                if (!songss) {
                    throw new Error('Error');
                }
                return songss;
        }
    }
    };
}
});

const Mutation = new GraphQLObjectType({
name: 'Mutations',
description: 'Functions to set stuff',
fields () {
    return {
    addUser: {
        type: User,
        args: {
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username:{
            type:new GraphQLNonNull(GraphQLString)
        },
        password:{
            type:new GraphQLNonNull(GraphQLString)
        }
        },
        resolve (source, args) {
            var newUser = new User();
            newUser.username = args.username;
            newUser.password = newUser.generateHash(args.password);
            newUser.email = args.email;
            newUser.firstName = args.firstName;
            newUser.lastName = args.lastName;
            newUser.save();
            if(!newUser)
                throw new Error('user not added');
            return newUser;

        }
    },
    addSong: {
        type: Songs,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            genre:{
                type: new GraphQLNonNull(GraphQLString)
            },
            description:{
                type: new GraphQLNonNull(GraphQLString)
            },
            tags:{
                type: new GraphQLNonNull(GraphQLString)
            },
            uploadlink:{
                type: new GraphQlNotNull(GraphQLString)
            }
        },
        resolve (source, args) {
        var link = args.uploadlink;
        i = 0;
        link.forEach(element,index => {
            if(element = '/')
                i = index;
        });

        var newlink = "./songs/" + (link.slice(i, link.length);

        var newSong = new Songs();
        newSong.name = args.name;
        newSong.tags = args.tags;
        newSong.genre = args.genre;
        newSong.description = args.description;
        newSong.uploadlink = newlink;
        newSong.save();
        if(!newUser)
                throw new Error('user not added');
            return newUser;
        }
    }
    };
}
});

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

export default Schema;
