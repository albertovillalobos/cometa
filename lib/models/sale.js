'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Sale Schema
 * Customer name
 * address
 * phone
 * timestamp
 * ip
 * shopping cart (items bough, w/e)
 */


var SaleSchema = new Schema({

  customer: String,
  address: String,
  phone: Number,
  timestamp: Date,
  ip: String

});

mongoose.model('Sale', SaleSchema);