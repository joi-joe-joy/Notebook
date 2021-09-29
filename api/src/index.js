const express = require('express');
const {
    ApolloServer,
    gql
} = require('apollo-server-express')

const port = process.env.port || 4000

let notes = [{
        id: '1',
        content: 'This is a note',
        author: 'Adam Scott'
    },
    {
        id: '2',
        content: 'This is another note',
        author: 'Harlow Everly'
    },
    {
        id: '3',
        content: 'Oh hey look, another note!',
        author: 'Riley Harrison'
    }
];

const typeDefs = gql `
    type Note {
        id: ID!
        content: String!
        author: String!
    }

    type Query {
        hello: String
        notes: [Note!]!
        note(id: ID): Note!
    }

    type Mutation {
        newNote(content: String!): Note!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello',
        notes: () => notes,
        note: (parent, args) => notes.find(({
            id
        }) => id === args.id)
    },
    Mutation: {
        newNote: (parent, args) => {
            let noteValue = {
                id: notes.length + 1,
                content: args.content,
                author: 'Harlow Everly'
            };
            notes.push(noteValue);
            return noteValue;
        }
    }
};

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({
    app,
    path: '/api'
});

app.listen({
        port
    }, () =>
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
    )
);