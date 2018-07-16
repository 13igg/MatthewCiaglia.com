import React, { Component } from 'react';
import Header from './Header';
import { Segment, Grid} from 'semantic-ui-react';
import LeftPane from './LeftPane';

class Layout extends Component {
  render() {
    return (
      <div> 
        <Header/>  

            <Grid columns='two' divided style={{ marginTop: '5em', marginLeft: '5px'}}>
                
                <Grid.Column style={{width:'auto', padding:'50px'}}>
                  <LeftPane />  
                </Grid.Column>              
              
                <Grid.Column>
                    <Segment>
                      {this.props.children}
                    </Segment>
                </Grid.Column>

            </Grid>
        </div>
     );
  };
}

export default Layout;