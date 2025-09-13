/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pandi-web.vercel.app", // ✅ your website URL
  generateRobotsTxt: true,                  // ✅ also generate robots.txt
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
};
