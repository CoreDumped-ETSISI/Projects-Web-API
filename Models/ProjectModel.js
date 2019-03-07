'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
    },

    progress: {
        type: Number,
    },

    password: {
        type: String,
    },

    users: [
        {
            name: {
                type: String,
            },
            email: {
                type: String,
            }
        }
    ],

    completed: {
        type: Boolean,
    },

    objectives: [
        {
            name: {
                type: String,
            },
            completed: {
                type: Boolean,
            }
        }
    ]
  });
  
  module.exports = mongoose.model('Projects', ProjectSchema);