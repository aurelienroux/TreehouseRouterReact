//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//CSS
import './css/index.css';
import './css/style.css';

//Components
// import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="teachers" component={Teachers} />
    <Route path="courses" component={Courses} />
  </Router>
), document.getElementById('root'));
