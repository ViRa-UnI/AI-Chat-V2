```javascript
const mongoose = require('mongoose');

const SettingsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    theme: {
        type: String,
        default: 'light'
    },
    fontSize: {
        type: Number,
        default: 14
    },
    aiBehavior: {
        formalityLevel: {
            type: String,
            default: 'casual'
        },
        responseTime: {
            type: Number,
            default: 2
        }
    }
});

module.exports = mongoose.model('Settings', SettingsSchema);
```