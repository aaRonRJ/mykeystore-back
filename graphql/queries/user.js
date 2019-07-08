var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var userModel = require('../../models/user');
var userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: () => {
                    const users = userModel.find().exec();

                    if (!users) {
                        throw new Error('Error');
                    }

                    return users;
                }
            }
        }
    }
});