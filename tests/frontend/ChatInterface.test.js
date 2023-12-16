```javascript
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatInterface from '../src/components/ChatInterface';

test('renders chat interface', () => {
  render(<ChatInterface />);
  const chatElement = screen.getByTestId('chatInterface');
  expect(chatElement).toBeInTheDocument();
});

test('sends message on submit', async () => {
  render(<ChatInterface />);
  
  const inputElement = screen.getByTestId('chatInput');
  const formElement = screen.getByTestId('chatForm');
  
  fireEvent.change(inputElement, { target: { value: 'Hello AI' } });
  fireEvent.submit(formElement);
  
  await waitFor(() => screen.getByText('Hello AI'));
  
  expect(screen.getByText('Hello AI')).toBeInTheDocument();
});
```