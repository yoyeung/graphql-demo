import { UserType,PostType } from '../../type';
import {getUsers,getPosts,getUserById,getPostById} from '../utils';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
export default {
  user: {
    type: UserType,
    // `args` describes the arguments that the `user` query accepts
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
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
