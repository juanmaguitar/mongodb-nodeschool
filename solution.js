var MongoClient = require('mongodb').MongoClient
var sizeQuery = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("prices")
		.aggregate([
			{ $match: { size: sizeQuery } },
			{ $group: {
 				_id: 'average',
				average: { $avg: '$price' }
			}}
		]).toArray(function(err, results) {
			if (err) throw err;
			if (!results.length) throw new Error('No results found')
			var oResult = results[0];
			console.log( Number(oResult.average).toFixed(2) );
			db.close();
		})

})

