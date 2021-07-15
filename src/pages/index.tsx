import React from 'react';
import { Layout } from 'components';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpeg"
      // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <h1 id="h-100">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-200">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-300">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-400">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-500">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-600">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-700">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-800">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
      <h1 id="h-900">WHOIS WIN•A WHOIS WIN•A WHOIS WIN•A</h1>
    </Layout>
  );
};

export default IndexPage;

/**
 * some unknowns:
 * - theming
 * - intl
 * - animations
 * - design system
 */
