var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CategoryType = require('../../types/category');
var CategoryModel = require('../../../models/category');

exports.update = {
    type: CategoryType.categoryType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return CategoryModel.findByIdAndUpdate(
            params.id,
            { $set: { name: params.name } },
            { new: true }
        )
        .catch(err => new Error(err));
    }
}
