```javascript
const express = require('express');
const Chat = require('../models/Chat');
const openAIChat = require('../utils/openAI');

// Process chat message
exports.processChat = async (req, res) => {
    try {
        const { message } = req.body;
        const { userId } = req.params;

        // Send user's message to OpenAI API
        const aiResponse = await openAIChat(message);

        // Save chat in the database
        const chat = new Chat({
            userId,
            userMessage: message,
            aiMessage: aiResponse,
        });

        await chat.save();

        // Send AI's response back to the user
        res.json({ aiMessage: aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
```