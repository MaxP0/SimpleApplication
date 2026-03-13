var assert = require('assert');

describe('Basic Array Test', function () {
  it('should return -1 when the value is not present', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});

describe('Math Test for CA', function () {
  it('should return 2 when 1 and 1 are added', function () {
    assert.equal(1 + 1, 2);
  });
});