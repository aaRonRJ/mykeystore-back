var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var categoryQueryType = require('./queries/category').queryType;
var categoryMutation = require('./mutations/category/index');
var keystoreQueryType = require('./queries/keystore').queryType;
var keystoreMutation = require('./mutations/keystore/index');
var userQueryType = require('./queries/user').queryType;
var userMutation = require('./mutations/user/index');

const categorySchema = new GraphQLSchema({
    query: categoryQueryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: categoryMutation
    })
});

const keystoreSchema = new GraphQLSchema({
    query: keystoreQueryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: keystoreMutation
    })
});

const userSchema = new GraphQLSchema({
    query: userQueryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: userMutation
    })
});

module.exports = {
    categorySchema,
    keystoreSchema,
    userSchema
};
