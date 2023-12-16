```javascript
import axios from 'axios';

const updateSettings = async (settings) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/settings', settings, config);

        return data;
    } catch (error) {
        throw error;
    }
};

export { updateSettings };
```