/**
 * Main application routes
 */

 'use strict';

 import errors from './components/errors';
 import path from 'path';

 export default function(app) {
  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404

  app.post('/contact', function(req, res) {
    console.log('received a POST request on /contact');
    res.status(200);
    res.send('Got you');
  });
  
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
  });
}
