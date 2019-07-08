var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// Category type
exports.categoryType = new GraphQLObjectType({
    name: 'category',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            }
        }
    }
});
