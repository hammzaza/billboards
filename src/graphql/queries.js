import gpl from 'graphql-tag';

export const addUser = gql`
    mutation addUser($username:String!,$firstName:String!,$lastName:String!,$email:String!,$password:String!){
        addUser(username:$username,firstName:$firstName,lastName:$lastName,email:$email,password: $password)
            username
            firstName
            lastName
            email
            password
    }
`;
export const addSong = gql`
    mutation addSong($name:String!,$genre:String!,$tags:String!,$description:String!,$uploadlink:String!){
        addSong(name:$name,genre:$genre,tags:$tags,description:$description,uploadlink: $uploadlink)
            name
            genre
            tags
            description
            uploadlink
    }
`;
export const getSong = gql`
    mutation getSong{$genre:String!){
        getSong(genre: $genre){
            name
            genre
            tags
            description
            uploadlink
        }
    }
`;
export const getUser = gql`
    mutation getUser($email:String!){
        getUser(email:$email){
            username
            firstName
            lastName
            email
            password
            check
        }
    }
`;