const {
    gql
} = require('apollo-server-express');

module.exports = gql `
    scalar DateTime

    type User {
        id: ID!
        username: String!
        email: String!
        avatar: String
        notes: [Note!]!
    }

    type Note {
        id: ID!
        content: String!
        author: String!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    type Query {
        hello: String
        notes: [Note!]!
        note(id: ID): Note!
    }

    type Mutation {
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
        newNote(content: String!): Note!
        updateNote(id: ID!, content: String!): Note!
        deleteNote(id: ID!): Boolean
    }
`;