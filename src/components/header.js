import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react';

class Header extends Component{
    render(){
        return(
            <Container>
            <Menu style={{marginTop: '10px'}}>
              <Menu.Item> Matthew </Menu.Item>
              <Menu.Menu position='right'> 
                <Menu.Item> Ciaglia </Menu.Item>        
              </Menu.Menu>            
            </Menu>
          </Container>
        )
    }
};

export default Header;