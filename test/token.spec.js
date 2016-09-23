
const chai = require('chai');
const appToken = require('../lib/token');

describe('checking token:', () => {
  it('Create and decode:', (done) => {
    const id = '1234567890';
    const token = appToken.createToken(id);
    appToken.decodeToken(token)
      .then((obj) => {
        chai.expect(obj.iss).to.equal(id);
        done();
      })
      .catch(done);
  });
});
