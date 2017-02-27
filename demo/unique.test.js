var unique = require('./unique.js');
var expect = require('chai').expect;

describe('一维数组去重', function() {
	var arr=[1,2,1,3,1,4];
  it('[1,2,1,3,1,4]应该等于[1,2,3,4]', function() {
    expect(arr.unique().toString()).to.be.equal([1,2,3,4].toString());
  });
});
