```javascript
const express = require('express');
const router = express.Router();
const { updateUserSettings } = require('../controllers/settingsController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').put(protect, updateUserSettings);

module.exports = router;
```