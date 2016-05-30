import { UserType,PostType } from '../../type';
import {createUser} from '../utils';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

let count = 0;

export default {
  updateCount:{
    type:GraphQLInt,
    description:'Update the count',
    resolve: ()=>{
      count+=1;
      return count;
    }
  },
  createUser:{
    type: UserType,
    args:{
      name:{
        type: GraphQLString
      },
      age:{
        type: GraphQLInt
      }
    },
    resolve:(_,{name,age})=>{
      console.log(name,age);
      return createUser({name,age,_id:"4"});
    }
  }
};
