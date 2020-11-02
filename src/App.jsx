import React from "react";
import Home from './pages/Home';
import MainNav from './components/MainNav';

import { Switch, Route } from "react-router-dom";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
