import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Admin from './pages/Admin';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/Admin'>
            <Admin>
              
            </Admin>
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  }
};

export default App;
