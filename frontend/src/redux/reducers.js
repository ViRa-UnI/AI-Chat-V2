```javascript
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CHAT_MESSAGE,
  UPDATE_SETTINGS
} from './actions';

const initialState = {
  isAuthenticated: false,
  user: null,
  chatMessages: [],
  settings: null,
  error: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };
    case CHAT_MESSAGE:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload]
      };
    case UPDATE_SETTINGS:
      return {
        ...state,
        settings: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
```