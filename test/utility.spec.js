
const chai = require('chai');
const utility = require('../lib/utility');
const imageBase64 = require('./data/image-base64');

const imageUrl = 'http://www.qqxxzx.com/images/image/image-24.jpg';

describe('checking function `isBase64`:', () => {
  it('Should to  be TRUE for base64 image', () => {
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(utility.isBase64(imageBase64)).to.be.true;
  });
  it('Should to be FALSE for base64 image', () => {
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(utility.isBase64(imageUrl)).to.be.false;
  });
});
