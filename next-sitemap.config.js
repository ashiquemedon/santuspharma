/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://santuspharma.vercel.app/", // ✅ your website URL
  generateRobotsTxt: true,                  // ✅ also generate robots.txt
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
};
