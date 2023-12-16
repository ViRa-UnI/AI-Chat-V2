```javascript
const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    messages: [
        {
            message: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            },
            isUser: {
                type: Boolean,
                default: true
            }
        }
    ]
});

module.exports = mongoose.model('Chat', ChatSchema);
```