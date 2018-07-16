import React from 'react';
import {Card, Image, List, Icon} from 'semantic-ui-react';
import mainLogo from '../images/face.PNG';

export default () => {
    const data = [
        {
            key:1,
            link: 'https://github.com/13igg',
            label: 'Github',
            icon: 'github',
        },
        {
            key:2,
            link: 'mailto:matthew.ciaglia@gmail.com',
            label: 'Mail',
            icon: 'envelope',
        },
        {
            key:3,
            link: 'https://www.linkedin.com/in/matthew-ciaglia-50328a62/',
            label: 'LinkedIn',
            icon: 'linkedin',
        },
    ];

    return(
        <Card color='blue'>
            <Image src={mainLogo} size='medium' circular />
            <Card.Content>
                <Card.Header>MATTHEW CIAGLIA</Card.Header>
                <Card.Meta>
                    Software Engineer
                    </Card.Meta>

                <Card.Meta>
                    <List horizontal divided size={'small'}>
                    {data.map(s => (
                            <List.Item key ={s.key}>
                                <Image> <Icon  size={'small'} name={s.icon} /> </Image>
                                <List.Content>                            
                                    <a href={s.link}>{s.label}</a>
                                </List.Content>
                            </List.Item>  
                    ))}           
                </List>   
                </Card.Meta>

            </Card.Content>
        </Card>
    );
}