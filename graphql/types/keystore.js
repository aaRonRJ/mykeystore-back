var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var categoryType = require('./category');

// keystore type
exports.keystoreType = new GraphQLObjectType({
    name: 'keystore',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            title: {
                type: GraphQLString
            },
            username: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            },
            repeatPassword: {
                type: GraphQLString
            },
            url: {
                type: GraphQLString
            },
            notes: {
                type: GraphQLString
            },
            category: {
                type: new GraphQLObjectType(categoryType)
            }
        }
    }
});
