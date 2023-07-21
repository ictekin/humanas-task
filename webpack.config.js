module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jtx]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
