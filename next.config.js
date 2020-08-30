module.exports = {
    async headers() {
      return [
        {
          // mathching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }
          ]
        }
      ]
    }
  };
  