var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var CategoryType = require('../../types/category');
var CategoryModel = require('../../../models/category');
var KeystoreType = require('../../types/keystore');
var KeystoreModel = require('../../../models/keystore');

exports.update = {
    type: KeystoreType.keystoreType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        repeatPassword: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: GraphQLString
        },
        notes: {
            type: GraphQLString
        },
        category: {
            type: new GraphQLObjectType(CategoryType)
        }
    },
    resolve(root, params) {
        return KeystoreModel.findByIdAndUpdate(
            params.id,
            {
                $set: {
                    title: params.title,
                    username: params.username,
                    password: params.password,
                    repeatPassword: params.repeatPassword,
                    url: params.url,
                    notes: params.notes,
                    category: params.category
                }
            }
        )
        .catch(err => new Error(err));
    }
}