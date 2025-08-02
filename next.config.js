const { withCloudflare } = require("@opennextjs/cloudflare");

module.exports = withCloudflare({
  reactStrictMode: true,
  experimental: {
    runtime: "experimental-edge"
  }
});