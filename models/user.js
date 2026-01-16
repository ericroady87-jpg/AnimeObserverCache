const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  showTitle: { type: String, required: true },
  genre: { type: String, required: true },
  comments: { type: String },
  whereToWatch: { type: String },
  status: { type: String, enum: ['Interested', 'Watching', 'Watching But Not Finished', 'Finished', 'Would Recommend', 'Would Not Recommend'], required: true }
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
