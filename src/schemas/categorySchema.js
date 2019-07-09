import { gql } from 'apollo-server';

export default gql`
    type Category {
        id: ID!
        name: String!
    }

    extend type Query {
        category(id: ID!): Category!
        categories: [Category!]!
    }

    extend type Mutation {
        createCategory(name: String!): Category!
    }
`;