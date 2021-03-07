module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "pEKnVLxQTsUc6-dcSMaEXnUf8xERsrLEH5Ek2zffeDk",
        spaceId: "cyp10x6qrlqr",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
