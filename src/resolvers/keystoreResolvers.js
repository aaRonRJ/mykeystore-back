import { AuthenticationError } from 'apollo-server';

export default {
    Query: {
        keystore: async (parent, { id }, { models: { keystoreModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystoreModel.findById({ _id: id }).exec();
            return store;
        },
        store: async (parent, args, { models: { keystoreModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystoreModel.find({ owner: me.id }).exec();
            return store;
        }
    },
    Mutation: {
        createKeystore: async (parent,
            { title, username, password, url, notes },
            { models: { keystoreModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystoreModel.create(
                { title, username, password, url, notes, owner: me.id });

            return store;
        }
    },
    Keystore: {
        category: async ({ category }, args, { models: { categoryModel } }, info) => {
            const cat = await categoryModel.findById({ _id: category }).exec();
            return cat;
        }
    },
    Keystore: {
        owner: async ({ owner }, args, { models: { userModel } }, info) => {
            const user = await userModel.findById({ _id: owner }).exec();
            return user;
        }
    }
}