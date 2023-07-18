/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "dergipark.org.tr", "i.ibb.co"],
  },
  env: {
    REACT_RAPID_API_KEY: "54daf2d7f2msh14a7180c7507ec1p1092e5jsna98a0d6dac7b",
  },
};

module.exports = nextConfig;
