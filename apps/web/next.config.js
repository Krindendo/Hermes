module.exports = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents:
      boolean |
      {
        displayName: true,
        fileName: true,
      },
  },
};
