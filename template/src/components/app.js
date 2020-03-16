import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';
import { StoreContext } from 'storeon/preact';

import Header from './header';
import store from '../store';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

import 'preact-material-components/style.css';

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event	    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <StoreContext.Provider value={store}>
          <Helmet
            meta={[
              {
                name: 'viewport',
                content:
                  'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
              }
            ]}
          />
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </StoreContext.Provider>
      </div>
    );
  }
}
