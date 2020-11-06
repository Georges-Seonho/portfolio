import React from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

import F181A529AD360019AA74744B862D78C3 from './Auth/F181A529AD360019AA74744B862D78C3.txt'
import MainNav from './components/MainNav';

import { Switch, Route } from "react-router-dom";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about-me" component={About} />
        <Route exact path="/.well-known/pki-validation/F181A529AD360019AA74744B862D78C3.txt" component={F181A529AD360019AA74744B862D78C3} />
      </Switch>
    </div>
  );
}

export default App;
