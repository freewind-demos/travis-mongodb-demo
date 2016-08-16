const mongoose = require('mongoose');

const DB_NAME = "travis-mongodb-demo-db";

module.exports = {
	connect: function() {
		mongoose.connect('mongodb://localhost/' + DB_NAME);
	},
	close: function() {
		mongoose.connection.close();
	}
}