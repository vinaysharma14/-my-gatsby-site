import React, { FC, ReactNode } from 'react';
import { Link } from 'gatsby';

import {
  navLinks,
  container,
  navLinkItem,
} from './styles.module.css';

interface Props {
  pageTitle: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
