import { gql } from 'apollo-server';

export default gql`
    type Keystore {
        id: ID!
        title: String!
        username: String!
        password: String!
        url: String!
        notes: String
        category: Category,
        owner: User!
    }

    extend type Query {
        keystore(id: ID!): Keystore!
        store: [Keystore!]!
    }

    extend type Mutation {
        createKeystore(title: String!, username: String!,
                        password: String!, url: String!,
                        notes: String): Keystore!
    }
`;