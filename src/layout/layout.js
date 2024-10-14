module.exports = function func(htmlWebpackPlugin, options) {
  const innerHTML = options.fn(this);

  // eslint-disable-next-line global-require
  return require('./layout.hbs')({
    title: htmlWebpackPlugin.options.title,
    baseUrl: htmlWebpackPlugin.options.baseUrl,
    innerHTML,
  });
};
