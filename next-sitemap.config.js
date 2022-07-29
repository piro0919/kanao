/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://kanao.vercel.app/",
  generateRobotsTxt: true,
};

module.exports = config;
