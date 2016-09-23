
const config = require('config');
const jwt = require('jsonwebtoken');

const opt = Object.assign({
  secret   : 'app-secret-token-key',
  algorithm: 'HS256',
  expiresIn: 60 * 60 * 24 * 30 // 30 days in seconds
}, config.jwt || {});

if (!config.jwt) {
  console.warn('WARNING: Please define the configuration for the JWT (app-utils)');
}

module.exports = {
  createToken(id) {
    return jwt.sign(
      { iss: id },
      opt.secret,
      { algorithm: opt.algorithm, expiresIn: opt.expiresIn }
    );
  },

  decodeToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, opt.secret, (err, decodedObj) => {
        err ? reject(err) : resolve(decodedObj);
      });
    });
  }
};
