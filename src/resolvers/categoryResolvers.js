import { AuthenticationError } from 'apollo-server';

export default {
    Query: {
        category: async (parent, { id }, { models: { categoryModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const category = await categoryModel.findById({ _id: id }).exec();
            return category;
        },
        categories: async (parent, args, { models: { categoryModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }
            console.log(categoryModel);
            const categories = await categoryModel.find().exec();
            return categories;
        }
    },
    Mutation: {
        createCategory: async (parent, { name }, { models: { categoryModel }, me }, info) => {
            if (!me) {
                throw new AuthenticationError('You are not authenticated');
            }

            const category = await categoryModel.create({ name });
            return category;
        }
    }
}