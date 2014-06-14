// items API controller
'use strict';

var mongoose = require('mongoose'),
	Item = mongoose.model('Item');




/* 
   Create new Item 
========================================================================== */
exports.create = function(req, res) {
	var item = new Item(req.body);

	item.save(function(err) {
		if (err)
			res.send(err);


		// return success message, if successful!
		res.json({message: "success"});
	});
}


/* 
	Get all Companies   
========================================================================== */
exports.get = function(req, res) {
	Item.find(function(err, items) {
		if (err) {
			res.send(err)
		};
		res.json(items);
	});
}



/* 
	Get a single item
========================================================================== */
exports.getItem = function (req, res) {
	Item.find({
		_id: req.params.item_id
	}, function(err, item) {
		if(err)
			res.send(err);

		res.json(item);

	});
}



/* 
	Delete a item   
========================================================================== */
exports.delete = function(req, res) {

	// res.json('this is the delete controller');
	Item.remove({
		_id: req.params.item_id
	}, function(err, item) {
		if (err)
			res.send(err);

		Item.find(function(err, items) {
			if (err)
				res.send(err)
			res.json(items);
		});
	});
}