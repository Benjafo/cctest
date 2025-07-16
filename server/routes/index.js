var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test API endpoint */
router.get('/api/test', function(req, res, next) {
  res.json({
    message: 'Hello from test API!',
    timestamp: new Date().toISOString(),
    data: {
      status: 'success',
      version: '1.0.0'
    }
  });
});

module.exports = router;
