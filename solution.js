var MongoClient = require('mongodb').MongoClient
var dbName = process.argv[2];
var collectionName = process.argv[3];
var idToRemove = process.argv[4];
var url = 'mongodb://localhost:27017/' + dbName;

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection(collectionName)
	.remove(
		{ _id: idToRemove },
		function(err) {
			if (err) throw err;
			db.close();
	})

})

