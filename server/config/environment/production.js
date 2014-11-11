'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/dextroinstagramnode'
  },
  instagram: {
    client_id: "f295c67d388c44f7a59e28a357657444",
    client_secret: "0b796dedd0124bcba3d3868fd47e538e"
  },
};