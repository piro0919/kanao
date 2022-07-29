/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://kanao-piro0919.vercel.app/",
  generateRobotsTxt: true,
};

export default config;
