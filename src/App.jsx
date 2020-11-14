import React from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Articles from './pages/Articles';
import ProjectPage from './pages/ProjectPage'

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
        <Route exact path="/projects/:id" component={ProjectPage} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
