import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import About from './pages/about';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        {/*<Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />  
        <Route path="/resume" component={Resume} />
  
        <Route component={NotFound} status={404} /> */}
      </Switch>
    </Router>,
    document.getElementById('root'),
  );

registerServiceWorker();




