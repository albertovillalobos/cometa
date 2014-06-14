'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/* 
   Think of this as a JAVA class 
========================================================================== */
var ItemModel = new Schema({
	name: String,
	cost: Number,
	price: Number,
	stock: Number
});


module.exports = mongoose.model('Item', ItemModel);