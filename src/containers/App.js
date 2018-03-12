import React from 'react';
import { Route, Link } from 'react-router-dom';
import LogIn from './LogIn';

const App = () => (
  <div>
    <main>
      <Route exact path="/log-in" component={LogIn} />
    </main>
  </div>
);

export default App;