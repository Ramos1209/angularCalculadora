const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://localhost:44333/"
  }
];
module.exports = PROXY_CONFIG;
