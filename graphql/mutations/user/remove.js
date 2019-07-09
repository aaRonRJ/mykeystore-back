var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var KeystoreType = require('../../types/keystore');
var KeystoreModel = require('../../../models/keystore');

exports.remove = {
    type: KeystoreType.keystoreType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const removedKeystore = KeystoreModel.findByIdAndRemove(params.id).exec();

        if (!removedKeystore) {
            throw new Error('Error');
        }

        return removedKeystore;
    }
}