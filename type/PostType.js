import {

  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import userType from './UserType';
import {getUser} from '../utils';

var postType = new GraphQLObjectType({
 name:'Post',
 fields:()=>{
   return {
     id:{type:GraphQLInt},
     title:{type:GraphQLString},
     editors:{
       type: new GraphQLList(userType),
       resolve(post){
         return getUser(post)
       }
     }
   }
 }
});
export default postType;
