const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const db = mongoose();
const app = express();

app.use('*', cors());

const categorySchema = require('./graphql/index').categorySchema;
const keystoreSchema = require('./graphql/index').keystoreSchema;
const userSchema = require('./graphql/index').userSchema;

app.use('/graphql', cors(), graphqlHTTP({
    schema: [
        categorySchema,
        keystoreSchema,
        userSchema
    ]
}));
