const 
  express = require('express'),
  consign = require('consign');

  module.exports = function() { 
    const app = express();

    consign()
      .include('rotas')
      .into(app);
    
    return app;
  } 
    