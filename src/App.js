import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { render } from '@testing-library/react';


import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import './App.css';
import { Headerbg } from './components/HomeComponents/headerbg.js';




function App() {
  return (
    <React.Fragment>
      <NavBar />
      
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
          <Route  component={NoMatch}/>

        </Switch>
      </Router>
    </Layout>
    </React.Fragment>
  );
  }      
    

export default App;
