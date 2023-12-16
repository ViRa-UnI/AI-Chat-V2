```javascript
const Settings = require('../models/Settings');

// Update user settings
exports.updateUserSettings = async (req, res) => {
    const { theme, fontSize, aiBehavior } = req.body;

    try {
        const settings = await Settings.findOne({ user: req.user.id });

        if (settings) {
            settings.theme = theme;
            settings.fontSize = fontSize;
            settings.aiBehavior = aiBehavior;

            await settings.save();

            res.json(settings);
        } else {
            const newSettings = new Settings({
                user: req.user.id,
                theme,
                fontSize,
                aiBehavior
            });

            await newSettings.save();

            res.json(newSettings);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
```