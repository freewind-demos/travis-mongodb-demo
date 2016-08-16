const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
    admin: Boolean
});

// the collection's name is `users`
const User = mongoose.model('User', userSchema);

module.exports = User;