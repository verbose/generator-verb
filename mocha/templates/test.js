/*!
 * <%= _.slugify(appname) %> <https://github.com/<%= username %>/<%= _.slugify(appname) %>>
 *
 * Copyright (c) 2014 <%= authorname %>, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var <%= _.namify(appname) %> = require('..');

describe('<%= _.namify(appname) %>', function () {
  it('should <%= appname %>', function () {
    var actual = <%= _.namify(appname) %>('foo');
    actual.should.equal('foo');
    actual.should.have.property('bar');
  });
});