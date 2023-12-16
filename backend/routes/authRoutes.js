```javascript
const express = require('express');
const router = express.Router();
const { authUser, registerUser } = require('../controllers/authController');

// Route for user login
router.post('/login', authUser);

// Route for user registration
router.post('/register', registerUser);

module.exports = router;
```