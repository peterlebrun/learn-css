module.exports = api => {
  if (api) {
    api.cache.using(() => process.env.NODE_ENV === "development");
  }

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
  ];

  const plugins = [
      "@babel/plugin-proposal-class-properties",
      "babel-plugin-react-css-modules",
  ];

  return {
    presets,
    plugins
  };
};
