import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Admin from './pages/Admin';
import Appointment from './pages/Appointment';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <Router>
      <Fragment>
        <Nav />
        <Home />
        <Services />
        <About />
        <Contact />
        <Switch>
          <Route exact path='/Admin'>
            <Admin>

            </Admin>
          </Route>
          <Route exact path='/Appointment' component={Appointment}/>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  }
};

export default App;
