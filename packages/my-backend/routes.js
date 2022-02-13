'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
console.log(2);
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
}
