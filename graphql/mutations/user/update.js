var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var UserType = require('../../types/user');
var KeystoreType = require('../../types/keystore');
var UserModel = require('../../../models/user');

exports.update = {
    type: UserType.userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
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
        return UserModel.findByIdAndUpdate(
            params.id,
            {
                $set: {
                    name: params.name,
                    lastname: params.lastname,
                    email: params.email,
                    password: params.password,
                    store: params.store
                }
            }
        )
            .catch(err => new Error(err));
    }
}