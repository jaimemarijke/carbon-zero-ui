import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    Route,
    Router,
    browserHistory,
} from 'react-router';
import LandingPage from './components/LandingPage.jsx';


const SiteRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
    </Router>
);

const App = (
  <Provider>
    <SiteRouter />
  </Provider>
);


ReactDOM.render(
  App,
  document.getElementById('render-target')
);
