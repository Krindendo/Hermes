module.exports = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents:
      boolean |
      {
        displayName: true,
        // Enabled by default.
        fileName: true,
      },
  },
};
