import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Layout from './components/Layout';
import {Container} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <Container>
          <Layout>
              <br/>
              This site was thrown together real quick as a template
              It will be filled in in the next few weeks. 
              <br/>
              React app deployed to a S3 AWS bucket.  
          </Layout>
        </Container>
    );
  }
}

export default App;
