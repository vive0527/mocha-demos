var trim = require('./trim.js');
var expect = require('chai').expect;
var str="   aabbb   ";
describe('字符串去左右空格', function() {
  it('  aabbb  应该等于aabbb', function() {
    expect(str.trim()).to.be.equal("aabbb");
  });
});
