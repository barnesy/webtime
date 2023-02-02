// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Webtime",
  siteUrl: "https://barnesy.me/",
  icon: "favicon.png",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CTF_SPACE_ID, // required
        accessToken: process.env.CTF_ACCESS_TOKEN, // required
        host: process.env.CTF_HOST,
        environment: "master",
        typeName: "Contentful",
      },
    },
  ],
  templates: {
    ContentfulBlogPost: [
      {
        path: "/blog/:slug",
        component: process.env.TEMPLATE_PATH + "ContentfulBlogPost.vue"
      }
    ]
  },
}
