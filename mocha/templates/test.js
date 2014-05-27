/*!
 * <%= appname %>
 *
 * Copyright (c) 2014 <%= appname %>, contributors
 * Licensed under the MIT License (MIT)
 */

var expect = require('chai').expect;
var <%= _.namify(appname) %> = require('../');

describe('when foo is passed:', function () {
  it('should convert foo to bar.', function () {
    var fixture = 'foo';
    var actual = 'bar';
    var expected = 'bar';
    expect(<%= _.namify(appname) %>(actual)).to.eql(expected);
  });
});