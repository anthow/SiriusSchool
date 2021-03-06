module.exports = {
  siteMetadata: {
    title: `Sirius School`,
    description: `Sirius School fait partie de Sirius Hub et est dédié aux formations en développement web (front-end, back-end et web design) et en création numérique (web design, graphisme, marketing digital, création de contenu, communication visuelle…).`,
    author: `@SiriusCoop`,
    siteUrl: `https://siriuscoop.be/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,      
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Heebo`,
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `68f78680abcbcd5b971d586a9bd731`,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['fr'],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
