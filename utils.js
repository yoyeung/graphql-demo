import users from './data.json';
import posts from './post.json';

export function getPost(user){
  return posts.filter((post)=>{
    return  post.editor.indexOf[user.id];
  });
}

export function getUser(post){
  return users.filter((user)=>{
    return  post.editor.indexOf[user.id] ;
  });
}
export function getUserById(id){
  return users.filter(user=>user.id === id)[0];
}

export function getPostById(id){
  return posts.filter(post=>post.id === id)[0];
}

export function getUsers(){
  return users;
}

export function getPosts(){
  return posts;
}
