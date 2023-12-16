```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../services/authService';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await login(user);
    if (response.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: LOGIN_FAIL, payload: response.data });
    }
  };

  return (
    <div id="loginForm">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```