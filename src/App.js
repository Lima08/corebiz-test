import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // colocar a navegação aqui
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/cart" component={ Cart } />
        <Route path="*" component={ NotFoundPage } />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
