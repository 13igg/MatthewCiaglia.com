import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Card, Image, List, Icon} from 'semantic-ui-react';
import Musicality from '../images/Musicality.PNG';
import MensVballCamp from '../images/mensVballCamp.jpg';
import Stratego from '../images/Stratego.png';

class Resume extends Component{
    render(){
        return(
            <Layout>
                 <Card.Group>
                    <Card color='red'  onClick={() => {}}>
                        <Image src={Stratego} fluid centered />
                        <Card.Content>
                            <Card.Header>Stratego</Card.Header>
                            <Card.Meta> 
                                Android App + Basic AI
                            </Card.Meta>

                            <Card.Description>                                
                                Recreated the Stratego board game by Milton-Bradley Android connecting players with Google Play Services. Also implemented a basic AI to play against. 
                            </Card.Description>
                        </Card.Content>
                    </Card>


                    <Card color='green'  onClick={() => {}}>
                        <Image src={Musicality} fluid centered />
                        <Card.Content>
                            <Card.Header>Musicality</Card.Header>
                            <Card.Meta> 
                                <a>http://radiant-river-4505.herokuapp.com</a>
                            </Card.Meta>

                            <Card.Description>                                
                                Unique way to find tracks within an artist’s discography based on other user’s comparisons.
                                Built as as course assignment at Carthage College to create and deploy a Ruby app<br/>
                            </Card.Description>
                        </Card.Content>
                    </Card>

                    
                    <Card color='blue'  onClick={() => {}}>
                        <Image src={MensVballCamp} fluid centered />
                        <Card.Content>
                            <Card.Header>Carthage College Men's Vball Camp Website (unused)</Card.Header>
                            <Card.Meta> 
                                PHP Webapp
                            </Card.Meta>

                            <Card.Description>                                
                                Course Assignment at Carthage College to create a webapp with a team of other students<br/>
                                My role was backend work creating and connecting to a MYSQL Database.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Layout>
        );
    };
}

export default Resume;