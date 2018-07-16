import React, {Component} from 'react';
import {withRouter, NavLink } from 'react-router-dom';
import {Menu, Container} from 'semantic-ui-react';

class Header extends Component{ 
        state = {}
        
        routes = [
            {
                key: 1,
                path: '/',
                label: 'Matthew Ciaglia',
                index: true,
            },
            {
                key: 3,
                path: '/resume',
                label: 'Resume',
            },
            {
                key: 4,
                path: '/projects',
                label: 'Projects',
            },
            {
                key: 2,
                path: '/blockchain',
                label: 'Blockchain',
            },
            {
                key: 5,
                path: '/contact',
                label: 'Contact',
            },
        ];

    render(){
        return(
            <Container>
                <Menu fixed='top' inverted>
                    {this.routes.map(l => (                                
                        <Menu.Item 
                            key = {l.key}
                            header = {l.index} 
                            as={NavLink} 
                            to={l.path}                            
                            name={l.label}
                        />                             
                    ))}
                </Menu>
            </Container>
        );
        }
}

export default withRouter(Header)