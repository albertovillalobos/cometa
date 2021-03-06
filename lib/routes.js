'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    item = require('./controllers/item'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {


/* ==========================================================================
   My own stuff
   ========================================================================== */


  app.route('/api/items')
    .get(item.get)
    .post(item.create);

  app.route('/api/items/:item_id')
    .get(item.getItem)
    .delete(item.delete);



  /* ==========================================================================
      Yeoman generated stuff
     ========================================================================== */
  
  
  

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};