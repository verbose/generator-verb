/*!
 * <%= appname %> <https://github.com/<%= username %>/<%= appname %>
 *
 * Copyright (c) 2014 <%= authorname %>, contributors
 * Licensed under the MIT License (MIT)
 */

var expect = require('chai').expect;
var <%= appname %> = require('../');


describe('<%= appname %>', function () {
  describe('when a basic one-word string is passed', function () {
    it('should return the string as-is', function () {
      var actual = <%= appname %>('foo');
      var expected = 'foo';
      expect(actual).to.eql(expected);
    });
  });

  describe('when a two-word name separated by hyphens is passed', function () {
    it('should return a camel-case version of the name', function () {
      var actual = <%= appname %>('foo-bar');
      var expected = 'fooBar';
      expect(actual).to.eql(expected);
    });
  });
});
