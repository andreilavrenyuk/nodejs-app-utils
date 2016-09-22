
const debug = require('debug');

module.exports = function Debug(name) {
  //noinspection JSUnresolvedVariable
  this.info = debug(`${name}:info`);
  //noinspection JSUnresolvedVariable
  this.error = debug(`${name}:error`);

  this.info.log = console.log.bind(console);
  this.error.log = console.error.bind(console);
};
