
const chai = require('chai');
const Debug = require('../lib/debug');

const expect = chai.expect;

describe('checking Debug:', () => {
  it('Instance of Debug:', () => {
    const debug = new Debug('app');
    debug.error(new Error('checking Debug'));
    expect(debug).to.respondTo('error');
    expect(debug).to.respondTo('info');
  });
});
