const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  showTitle: { type: String, required: true },
  genre: { type: String },
  comments: { type: String },
  whereToWatch: { type: String },
  status: { type: String, enum: ['interested', 'watching', 'watchingButNotFinished', 'finished', 'wouldRecommend', 'wouldNotRecommend'], required: true }
});
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
