```javascript
import axios from 'axios';

const sendMessage = async (message) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/chat', { message }, config);

    return data;
  } catch (error) {
    throw error;
  }
};

export { sendMessage };
```