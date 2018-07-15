import React from 'react';
import { Link } from 'react-router-dom';

export default () =>
{
    const routes = [
        {
          path: '/',
          label: 'Matthew Ciaglia',
          index: true,
        },
        {
          path: '/about',
          label: 'About',
        },
        {
          path: '/resume',
          label: 'Resume',
        },
        {
          path: '/projects',
          label: 'Projects',
        },
        {
          path: '/contact',
          label: 'Contact',
        },
      ];

    return(
        <header id="header">
            <h1 className="index-link">
            {routes.filter(l => l.index).map(l => (
                <Link key={l.label} to={l.path}>{l.label}</Link>
            ))}
            </h1>
            <nav className="links">
            <ul>
                {routes.filter(l => !l.index).map(l => (
                <li key={l.label}>
                    <Link to={l.path}>{l.label}</Link>
                </li>
                ))}
            </ul>
            </nav>
      </header>
    );
};