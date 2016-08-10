var MongoClient = require('mongodb').MongoClient
var dbName = process.argv[2];
var url = 'mongodb://localhost:27017/' + dbName;

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection('users')
	.update(
		{ username: "tinatime" },
		{ $set: { age: 40 } },
		function(err) {
			if (err) throw err;
			db.close();
	})

})

