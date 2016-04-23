import {

  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import postType from './PostType';

import {getPosts} from '../utils';
// Define the User type with two string fields: `id` and `name`.
// The type of User is GraphQLObjectType, which has child fields
// with their own types (in this case, GraphQLString).
var userType = new GraphQLObjectType({
 name: 'User',
 fields: ()=>{
   return {
     id: { type: GraphQLString },
     name: { type: GraphQLString },
     age: {type:GraphQLInt},
     posts:{
       type: new GraphQLList(postType),
       resolve: (user) => getPosts(user),

     }
   }
 }
});
export default userType;
