const db = require('./db.js');
const User = require('./user.js');

function saveAsAdmin(name, callback) {
  const user = new User({
    name: name,
    admin: true
  });

  return user.save(callback);
}

module.exports = saveAsAdmin;

