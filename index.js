import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import graphqlHTTP from 'express-graphql';
import express from 'express';

// Import the data you created above

import {UserType,PostType} from './type';

import {getUsers,getPosts,getUserById,getPostById} from './utils';


// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: UserType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: GraphQLString }
        },
        resolve:  (_, args) => getUserById(args.id)

      },
      users:{
        type: new GraphQLList(UserType),
        args: {},
        resolve:  (_)=> getUsers()
      },
      post: {
        type: PostType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: GraphQLInt }
        },
        resolve:  (_, args)=> getPostById(args.id)

      },
      posts: {
        type: new GraphQLList(PostType),
        // `args` describes the arguments that the `user` query accepts
        args: {},
        resolve: () => getPosts()
      }
    }
  })
});

express()
  .use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))
  .listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
