/* eslint-env mocha, chai */
/* global ziplist, ziplistTheSimPleWay */

describe('ZipList', function () {
  const alphabet = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  describe('ziplist()', function () {
    it('should return a single array with six elements', function () {
      chai.expect(ziplist(alphabet, numbers)).to.be.an('array');
      chai.expect(ziplist(alphabet, numbers)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six elements array', function () {
      chai.expect(ziplist(alphabet, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('ziplistTheSimPleWay()', function () {
    it('should return a single array with six elements', function () {
      chai.expect(ziplistTheSimPleWay(alphabet, numbers)).to.be.an('array');
      chai.expect(ziplistTheSimPleWay(alphabet, numbers)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six elements array', function () {
      chai.expect(ziplistTheSimPleWay(alphabet, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
