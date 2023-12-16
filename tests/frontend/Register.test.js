```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import Register from '../src/components/Register';

test('renders register form', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  const registerForm = getByTestId('registerForm');
  expect(registerForm).toBeInTheDocument();
});

test('allows the user to register successfully', async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  const registerButton = getByText(/register/i);

  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(registerButton);

  // Here you should have your logic to wait for the register request to be completed
  // For example, you could wait for a success message to appear on the screen
  // const successMessage = await findByText(/successfully registered/i);
  // expect(successMessage).toBeInTheDocument();
});
```