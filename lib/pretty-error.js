
const PrettyError = require('pretty-error');

function prettyErr(params) {
  params = params || {}; // eslint-disable-line no-param-reassign
  const pe = new PrettyError();
  if (typeof params.skipNodeFiles === 'undefined' || params.skipNodeFiles) {
    pe.skipNodeFiles();
  }
  const styles = Object.assign({
    // 'pretty-error > header > title > kind': {
    'pretty-error > header > trace': {
      // which we can hide:
      display: 'none'
    },

    // the 'colon' after 'Error':
    'pretty-error > header > colon': {
      // we hide that too:
      display: 'none'
    },

    'pretty-error > header > message': {
      color: 'bright-white',
      // we can use black, red, green, yellow, blue, magenta, cyan, white,
      // grey, bright-red, bright-green, bright-yellow, bright-blue,
      // bright-magenta, bright-cyan, and bright-white
      // background: 'cyan',
      padding: '0 1'
    },
    'pretty-error > trace > item': {
      marginLeft: 2,
      marginBottom: 0
    },
    'pretty-error > trace > item > header > pointer > file': {
      color: 'red'
    },
    'pretty-error > trace > item > header > pointer > colon': {
      color: 'red'
    },
    'pretty-error > trace > item > header > pointer > line': {
      color: 'yellow'
    },
    'pretty-error > trace > item > header > what': {
      color: 'white'
    }
  }, params.styles || {});

  pe.appendStyle(styles);
  
  return pe.render;
}

module.exports = prettyErr;
