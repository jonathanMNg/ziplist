/* eslint-env mocha, chai */
/* global ziplist, ziplistTheSimPleWay */

describe('ZipList', function () {
  const alphabet = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  describe('ziplist()', function () {
    it('should return 10 for ziplist', function () {
      chai.expect(ziplist(alphabet,numbers)).to.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('ziplistTheSimPleWay()', function () {
    it('should return 10 for ziplist', function () {
      chai.expect(ziplistTheSimPleWay(alphabet,numbers)).to.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
