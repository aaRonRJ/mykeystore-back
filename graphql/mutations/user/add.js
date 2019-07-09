var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var KeystoreType = require('../../types/keystore');
var KeystoreModel = require('../../../models/keystore');

exports.add = {
    type: KeystoreType.keystoreType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: GraphQLString
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        store: {
            type: new GraphQLList(KeystoreType)
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
}