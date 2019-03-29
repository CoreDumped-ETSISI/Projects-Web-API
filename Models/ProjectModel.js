'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
    },

    previousName: {
        type: String,
    },

    description: {
        type: String,
    },

    icon: {
        type: String,
    },
    
    tagList: [
        {
            name: {
                type: String,
            },
        }
    ],

    repository: {
        type: String,
    },

    documentationUrl: {
        type: String,
    },

    productOwner: {
        type: String,
    },

    users: [
        {
            name: {
                type: String,
            },
            email: {
                type: String,
            },
            admin: {
                type: Boolean,
                default: false,
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