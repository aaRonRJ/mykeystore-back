var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var KeystoreType = require('../../types/keystore');
var CategoryType = require('../../types/category');
var KeystoreModel = require('../../../models/keystore');

exports.add = {
    type: KeystoreType.keystoreType,
    args: {
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
        const keystore = new KeystoreModel(params);
        const newKeystore = keystore.save();

        if (!newKeystore) {
            throw new Error('Error');
        }

        return newKeystore;
    }
};
