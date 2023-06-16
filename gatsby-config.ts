/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

const { languages, defaultLanguage } = require("./languages")

module.exports = {
  siteMetadata: {
    title: `Marodyne`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@letgodoy`,
    siteUrl: `https://marodyne.us`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0F2B76`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#0F2B76`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages,
        defaultLanguage,
        siteUrl: `marodyneliv.us`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          defaultNS: "index",
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
          lowerCaseLng: true,
          cleanCode: true,
        },
        pages: [
          {
            matchPath: "/:lang",
            getLanguageFromPath: true,
          },
        ],
      },
    },
  ],
}
