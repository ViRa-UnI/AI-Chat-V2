```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
```