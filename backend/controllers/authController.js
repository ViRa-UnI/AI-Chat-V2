```javascript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// User registration
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            username,
            password: hashedPassword,
        });

        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            username: user.username,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// User authentication
exports.authUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            username: user.username,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
```