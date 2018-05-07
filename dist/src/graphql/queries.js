'use strict';

var _queries;

var _templateObject = _taggedTemplateLiteral(['\n    mutation addUser($username:String!,$firstName:String!,$lastName:String!,$email:String!,$password:String!){\n        addUser(username:$username,firstName:$firstName,lastName:$lastName,email:$email,password: $password)\n            username\n            firstName\n            lastName\n            email\n            password\n    }\n'], ['\n    mutation addUser($username:String!,$firstName:String!,$lastName:String!,$email:String!,$password:String!){\n        addUser(username:$username,firstName:$firstName,lastName:$lastName,email:$email,password: $password)\n            username\n            firstName\n            lastName\n            email\n            password\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    mutation addSong($name:String!,$genre:String!,$tags:String!,$description:String!,$uploadlink:String!){\n        addSong(name:$name,genre:$genre,tags:$tags,description:$description,uploadlink: $uploadlink)\n            name\n            genre\n            tags\n            description\n            uploadlink\n    }\n'], ['\n    mutation addSong($name:String!,$genre:String!,$tags:String!,$description:String!,$uploadlink:String!){\n        addSong(name:$name,genre:$genre,tags:$tags,description:$description,uploadlink: $uploadlink)\n            name\n            genre\n            tags\n            description\n            uploadlink\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    mutation getSong($genre:String!){\n        getSong(genre: $genre){\n            name\n            genre\n            tags\n            description\n            uploadlink\n        }\n    }\n'], ['\n    mutation getSong($genre:String!){\n        getSong(genre: $genre){\n            name\n            genre\n            tags\n            description\n            uploadlink\n        }\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    mutation getUser($email:String!){\n        getUser(email:$email){\n            username\n            firstName\n            lastName\n            email\n            password\n            check\n        }\n    }\n'], ['\n    mutation getUser($email:String!){\n        getUser(email:$email){\n            username\n            firstName\n            lastName\n            email\n            password\n            check\n        }\n    }\n']);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require('graphql-tag');

var addUser = gql(_templateObject);
var addSong = gql(_templateObject2);
var getSong = gql(_templateObject3);
var getUser = gql(_templateObject4);
module.exports = queries = (_queries = {
    addUser: addUser
}, _defineProperty(_queries, 'addUser', addUser), _defineProperty(_queries, 'getSong', getSong), _defineProperty(_queries, 'getUser', getUser), _queries);