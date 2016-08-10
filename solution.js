var MongoClient = require('mongodb').MongoClient
var ageQuery = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("parrots")
		.count(
			{ age: { $gt: +ageQuery }  },
			function(err, count) {
				if (err) throw err;
				console.log(count);
				db.close();
		})

})

