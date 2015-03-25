/*!
 * <%= _.slugify(appname) %> <https://github.com/<%= username %>/<%= _.slugify(appname) %>>
 *
 * Copyright (c) <%= (new Date).getFullYear() %> <%= authorname %>.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var <%= _.namify(appname) %> = require('./');

describe('<%= _.namify(appname) %>', function () {
  it('should:', function () {
    <%= _.namify(appname) %>('a').should.eql({a: 'b'});
    <%= _.namify(appname) %>('a').should.equal('a');
  });

  it('should throw an error:', function () {
    (function () {
      <%= _.namify(appname) %>();
    }).should.throw('<%= _.namify(appname) %> expects valid arguments');
  });
});
