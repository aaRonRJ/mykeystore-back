import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schemas from './schemas';
import resolvers from './resolvers';

import categoryModel from './models/categoryModel';
import keystoreModel from './models/keystoreModel';
import userModel from './models/userModel';

const app = express();
app.use(cors());

const getUser = async (req) => {
  const token = req.headers['token'];

  if (token) {
    try {
      return await jwt.verify(token, 'riddlemethis');
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      const me = await getUser(req);

      return {
        me,
        models: {
            categoryModel,
            keystoreModel,
            userModel
        }
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

mongoose.set('useCreateIndex', true);

app.listen(5000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mykeystore',
            { useNewUrlParser: true });

        console.log('>>> DB is connected');

    } catch (e) {
        console.log('Something goes wrong!');
        console.log(e);
    }

    console.log('Server on port 5000');
});