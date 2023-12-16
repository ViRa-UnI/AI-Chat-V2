```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../src/components/Login';

test('renders login form', () => {
  const { getByTestId } = render(<Login />);
  const loginForm = getByTestId('loginForm');
  expect(loginForm).toBeInTheDocument();
});

test('allows the user to login successfully', async () => {
  const fakeUserResponse = { token: 'fake_user_token' };
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    });
  });

  const { getByLabelText, getByText } = render(<Login />);

  fireEvent.change(getByLabelText(/username/i), {
    target: { value: 'chuck' },
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: 'norris' },
  });

  fireEvent.click(getByText(/submit/i));

  const alert = await window.alert;
  expect(alert).toHaveBeenCalledWith('Logged in!');
  expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token);

  window.fetch.mockRestore();
});
```