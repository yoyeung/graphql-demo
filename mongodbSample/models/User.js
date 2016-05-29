import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
  _id:{
    type: String
  },
  name: {
    type: String
  },
  age:{
    type: Number
  },
  friends: [{
    type: String,
    ref: 'User'
  }]
});

var User = mongoose.model('User', UserSchema);

export default User;
