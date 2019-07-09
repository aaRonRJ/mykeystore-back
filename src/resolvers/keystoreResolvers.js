import { AuthenticationError } from 'apollo-server';

export default {
    Query: {
        keystore: async (parent, { id }, { models: { keystore }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystore.findById({ _id: id }).exec();
            return store;
        },
        store: async (parent, args, { models: { keystore }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystore.find({ owner: me.id }).exec();
            return store;
        }
    },
    Mutation: {
        createKeystore: async (parent,
            { title, username, password, url, notes },
            { models: { keystore }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const store = await keystore.create(
                { title, username, password, url, notes, owner: me.id });

            return store;
        }
    },
    Category: {
        category: async ({ category }, args, { models: { category } }, info) => {
            const cat = await keystore.findById({ _id: category }).exec();
            return cat;
        }
    },
    User: {
        owner: async ({ owner }, args, { models: { userModel } }, info) => {
            const user = await userModel.findById({ _id: owner }).exec();
            return user;
        }
    }
}