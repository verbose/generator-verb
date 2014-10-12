/*!
 * <%= _.slugify(appname) %> <https://github.com/<%= username %>/<%= _.slugify(appname) %>>
 *
 * Copyright (c) 2014 <%= authorname %>, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var <%= _.namify(appname) %> = require('..');

describe('<%= _.namify(appname) %>', function () {
  it('should equal', function () {
    <%= _.namify(appname) %>({a: 'b'}).should.eql({a: 'b'});
    <%= _.namify(appname) %>('abc').should.equal('abc');
  });

  it('should have property.', function () {
    <%= _.namify(appname) %>({a: 'b'}).should.have.property('a', 'b');
  });
});

