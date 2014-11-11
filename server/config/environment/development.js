'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/instagram'
  },

  instagram: {
    client_id: "XXX",
    client_secret: "XXX"
  },
  seedDB: false,
  port: 9001

};
