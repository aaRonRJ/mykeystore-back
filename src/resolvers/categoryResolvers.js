import { AuthenticationError } from 'apollo-server';

export default {
    Query: {
        category: async (parent, { id }, { models: { category }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const category = await category.findById({ _id: id }).exec();
            return category;
        },
        categories: async (parent, args, { models: { category }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const categories = await category.find().exec();
            return categories;
        }
    },
    Mutation: {
        createCategory: async (parent, { name }, { models: { category }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const cat = await category.create({ name });
            return cat;
        }
    }
}