import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/fontawesome-free-brands';

export default () => {
    const data = [
        {
            link: 'https://github.com/13igg',
            label: 'Github',
            icon: faGithub,
        },
        {
            link: 'mailto:matthew.ciaglia@gmail.com',
            label: 'Email',
            icon: faEnvelope,
        },
        {
            link: 'https://www.facebook.com/MatthewCiaglia',
            label: 'Facebook',
            icon: faFacebook
        },
        {
            link: 'https://www.linkedin.com/in/matthew-ciaglia-50328a62/',
            label: 'LinkedIn',
            icon: faLinkedin,
        },
    ];

    return(
        <section id="footer">
            <ul className="icons">
                {data.map(s => (
                    <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
                ))}
            </ul>
            <p className="copyright">&copy; Matthew Ciaglia</p>
        </section>
    );
}