'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var ChannelSchema = new Schema({
  id: Number,
  item: String
});
var CustomerSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: true,
    trim: true
  },
  surname: {
    type: String,
    default: '',
    trim: true
  },
  suburb: {
    type: String,
    default: '',
    trim: true
  },
  country: {
    type: String,
    default: '',
    trim: true
  },
  industry: {
    type: String,
    default: '',
    trim: true
  },
  referred: {
    type: Boolean,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  channel: {
    type: ChannelSchema,
    default: {}
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Customer', CustomerSchema);
