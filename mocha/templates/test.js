var expect = require('chai').expect;
var <%= appname %> = require('../');



describe('when foo is passed:', function () {
  it('should convert foo to bar.', function () {
    var fixture = 'foo';
    var actual = 'bar';
    var expected = 'bar';
    expect(<%= appname %>(actual)).to.eql(expected);
  });
});