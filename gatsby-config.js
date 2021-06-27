const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
      },
    },
  ],
};
