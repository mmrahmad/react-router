import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App componant
import Header from './Header'
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses'
import NotFoun from './NotFound'
import Featured from './Featured'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFoun} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;