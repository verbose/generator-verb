/*!
 * <%= _.slugify(appname) %> <https://github.com/<%= username %>/<%= _.slugify(appname) %>>
 *
 * Copyright (c) 2014 <%= authorname %>, contributors.
 * Licensed under the MIT License
 */

'use strict';

var expect = require('chai').expect;
var <%= _.namify(appname) %> = require('../');

describe('<%= _.namify(appname) %>', function () {
  it('should convert the fixture.', function () {
    var actual = <%= _.namify('foo') %>(fixture);
    expect(actual).to.eql('bar');
  });
});