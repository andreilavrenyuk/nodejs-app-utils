
module.exports = function isBase64(str) {
  return str && typeof str === 'string' && !str.match(/^http/);
};
