/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://blossombeauty.pl",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
