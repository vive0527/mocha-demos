var log = require('./log.js');
var expect = require('chai').expect;
describe('log代理console.log', function() {
  it('  aabbb  应该等于aabbb', function() {
    expect(log("aaa")).to.be.equal(console.log("aaa"));
  });
});
