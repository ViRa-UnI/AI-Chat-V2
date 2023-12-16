```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import Login from './components/Login';
import Register from './components/Register';
import ChatInterface from './components/ChatInterface';
import Settings from './components/Settings';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={ChatInterface} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
```