module.exports = {
    siteMetadata: {
      title: `Robert Diao`,
      authorFirstname: `Robert`,
      authorSurname: `Diao`,
    },

    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-catch-links',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'src/pages',
          name: 'pages',
        },
      },
      `gatsby-transformer-remark`,
    ],
}
  