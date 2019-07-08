var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CategoryType = require('../../types/category');
var CategoryModel = require('../../../models/category');

exports.remove = {
    type: CategoryType.categoryType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const removedCategory = CategoryModel.findByIdAndRemove(params.id).exec();

        if (!removedCategory) {
            throw new Error('Error');
        }

        return removedCategory;
    }
}