```javascript
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const CHAT_MESSAGE = 'CHAT_MESSAGE';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const chatMessage = (message) => ({
  type: CHAT_MESSAGE,
  payload: message,
});

export const updateSettings = (settings) => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});
```