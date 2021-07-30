import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import UserAcount from './pages/UserAcount';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/cart" component={ Cart } />
        <Route path="/myAcount" component={ UserAcount } />
        <Route path="*" component={ NotFoundPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
