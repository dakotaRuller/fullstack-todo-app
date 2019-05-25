const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/api/todos',
    { target: 'http://172.31.99.127:3008/' }
  ));
};