import { gql } from 'apollo-server';

export default gql`
    type User {
        id: ID!
        name: String!
        lastname: String
        email: String!
        store: [Keystore!]!
    }

    type Token {
        token: String!
    }

    extend type Query {
        user(id: ID!): User!
        login(email: String!, password: String!): Token!
    }

    extend type Mutation {
        createUser(name: String!, lastname: String,
                    email: String!, password: String!): User!
    }
`;