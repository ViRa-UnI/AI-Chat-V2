```javascript
const express = require('express');
const router = express.Router();
const { processChat } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, processChat);

module.exports = router;
```