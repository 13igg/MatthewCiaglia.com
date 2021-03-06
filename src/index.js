import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Blockchain from './pages/Blockchain';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/blockchain" component={Blockchain} />        
        <Route path="/contact" component={Contact} />  
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
  
        {/*<Route component={NotFound} status={404} /> */}
      </Switch>
    </Router>,
    document.getElementById('root'),
  );

registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




