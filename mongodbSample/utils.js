import User from './models/User.js';
import Post from './models/Post.js';

export function getPost(user){
  return Post.find({editors:user.id},(err,posts)=>{
    if(err) return {};
    return posts;
  });
  // return posts.filter((post)=>{
  //   return  post.editor.indexOf(user.id) >=0;
  // });
}

export function getUser(post){
  console.log("post",post);
  return Post.findOne({id:post.id},(err,post)=>{
    if(err) return {};
    User.find({id:{$in:post.editor}},(err,users)=>{
      if(err) return {};
      return users;
    });
  })
  // return users.filter((user)=>{
  //   return  post.editor.indexOf(user.id) >=0;
  // });
}
export function getUserById(id){
  return User.findOne({id:id},(err,user)=>{
    if(err) return {};
    return user;
  });
  // return users.filter(user=>user.id === id)[0];
}

export function getPostById(id){
  return Post.findOne({id:id},(err,post)=>{
    if(err) return {};
    return post;
  });
  // return posts.filter(post=>post.id === id)[0];
}

export function getUsers(){
  console.log("what?");
  return User.find({},(err,users)=>{
    console.log(err,users);
    if(err) return {};
    return users;
  });
  // return users;
}

export function getPosts(){
  console.log("lol");
  return Post.find({},(err,posts)=>{
    console.log(err,posts);
    if(err) return {};
    return posts;
  });
  // return posts;
}
