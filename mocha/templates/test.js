/*!
 * <%= _.slugify(appname) %> <https://github.com/<%= username %>/<%= _.slugify(appname) %>>
 *
 * Copyright (c) 2014 <%= authorname %>, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var <%= _.namify(appname) %> = require('./');

describe('<%= _.namify(appname) %>', function () {
  it('should:', function () {
    <%= _.namify(appname) %>('a').should.equal({a: 'b'});
    <%= _.namify(appname) %>('a').should.eql('a');
    <%= _.namify(appname) %>('a').should.eql('a');
  });

  it('should throw an error:', function () {
    (function () {
      <%= _.namify(appname) %>();
    }).should.throw('<%= _.namify(appname) %> expects valid arguments');
  });
});
