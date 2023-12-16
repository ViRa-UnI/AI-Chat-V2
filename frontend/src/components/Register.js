```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../services/authService';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../redux/actions';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(formData);
    if (response.success) {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REGISTER_FAIL, payload: response.error });
    }
  };

  return (
    <div>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```