var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var categoryModel = require('../../models/category');
var categoryType = require('../types/category').categoryType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            categories: {
                type: new GraphQLList(categoryType),
                resolve: () => {
                    const categories = categoryModel.find().exec();

                    if (!categories) {
                        throw new Error('Error');
                    }

                    return categories;
                }
            }
        }
    }
});
