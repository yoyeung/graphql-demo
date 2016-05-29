import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  _id:{
    type: String
  },
  title: {
    type: String
  },
  editors: [{
    type: String,
    ref: 'User'
  }]
});

var Post = mongoose.model('Post', PostSchema);

export default Post;
