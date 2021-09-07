module.exports = function (elventyConfig) {
  elventyConfig.addPassthroughCopy('src/css');
  elventyConfig.addWatchTarget('src/css');

  return {
    dir: {
      input: 'src'
    }
  };
};
