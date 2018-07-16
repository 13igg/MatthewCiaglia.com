import React, { Component } from 'react';
import '../css/App.css';
import Layout from '../components/Layout';

class Index extends Component {
  render() {
    return (
          <Layout>
              <h1>About this website</h1>
              ** This is the first draft of matthewciaglia.com **
              <br/>              <br/>

              The responsive SPA is created with React and Semantic-Ui and deployed to a S3 AWS bucket for static hosting. 
              <br/>              <br/>
              Find the source on my GitHub

          </Layout>
    );
  }
}

export default Index;
