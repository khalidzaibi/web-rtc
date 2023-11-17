const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type:String },
  email: { type:String ,unique:true},
  password: { type:String},
  friends: [{
    type: mongoose.Schema.Types.Object, ref: "User"
  }]
});

module.exports = mongoose.model('User',userSchema);