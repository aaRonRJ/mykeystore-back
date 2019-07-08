var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var keyStoreType = require('./keystore');

// User type
exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            },
            lastname: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            },
            store: {
                type: new GraphQLList(keyStoreType)
            }
        }
    }
});
