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

<<<<<<< HEAD
/* POST login endpoint */
router.post('/api/login', function(req, res, next) {
  const { email, password } = req.body;
  
  // TODO: Implement actual authentication logic
  // For now, just return a mock response
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  // Mock successful login response
  res.json({
    success: true,
    message: 'Login request received successfully',
    user: {
      email: email,
      id: 'mock-user-id'
    },
    token: 'mock-jwt-token'
  });
});

=======
>>>>>>> 951ef709c769f848c259baca391b43f45eca12c2
module.exports = router;
