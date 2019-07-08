var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var keystoreModel = require('../../models/keystore');
var keystoreType = require('../types/keystore').keystoreType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            keystore: {
                type: new GraphQLList(keystoreType),
                resolve: () => {
                    const keystore = keystoreModel.find().exec();

                    if (!keystore) {
                        throw new Error('Error');
                    }

                    return keystore;
                }
            }
        }
    }
});
