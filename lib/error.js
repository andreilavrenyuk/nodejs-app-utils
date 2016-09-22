
const util = require('util');

const messages = {
  101: 'Switching Protocols',
  102: 'Processing',
  200: 'Ok',
  201: 'Created',
  204: 'No Content',
  301: 'Moved Permanently',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Already Exists',
  500: 'Internal Server Error'
};


//noinspection JSCommentMatchesSignature,JSValidateJSDoc
/**
 * @param {String=} message
 * @param {Number=} code
 * @param {Number=} statusCode
 */
function AppError(...args) {
  let code = 500;
  let statusCode;
  let message;

  if (typeof args[0] === 'string') {
    message = args.shift();
  }

  if (typeof args[0] === 'number') {
    code = args.shift();
  }

  if (typeof args[0] === 'number') {
    statusCode = args.shift();
  }

  //noinspection JSUnresolvedFunction
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || messages[code] || 'Unknown error';
  this.code = code;
  this.statusCode = statusCode || 200;
}

util.inherits(AppError, Error);

module.exports = AppError;
