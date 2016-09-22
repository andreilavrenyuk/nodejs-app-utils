
const chai = require('chai');
const AppError = require('../lib/error');

describe('checking app error:', () => {
  it('Instance of error:', () => {
    const err = new AppError();
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err instanceof Error).to.be.true;
  });
  it('Error name should to be an `AppError`:', () => {
    const err = new AppError();
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.name).to.equal('AppError');
  });
  it('Message as first argument:', () => {
    const err = new AppError('An Error');
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.message).to.equal('An Error');
  });
  it('Error code as first argument:', () => {
    const err = new AppError(500);
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.code).to.equal(500);
  });
  it('Status code should be `200`:', () => {
    const err = new AppError('An Error', 500);
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.statusCode).to.equal(200);
  });
  it('Status code should be `404`:', () => {
    const err = new AppError('An Error', 404, 404);
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.statusCode).to.equal(404);
  });
  it('Default message:', () => {
    const err = new AppError(404, 200);
    //noinspection JSUnresolvedVariable,BadExpressionStatementJS
    chai.expect(err.message).to.equal('Not Found');
  });
});
