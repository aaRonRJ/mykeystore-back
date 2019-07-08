var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CategoryType = require('../../types/category');
var CategoryModel = require('../../../models/category');

exports.add = {
    type: CategoryType.categoryType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const category = new CategoryModel(params);
        const newCategory = category.save();

        if (!newCategory) {
            throw new Error('Error');
        }
        return newCategory;
    }
}