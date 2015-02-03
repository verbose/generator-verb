/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var os = require('os');


describe('verb:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.gitattributes',
      '.gitignore',
      '.jshintrc',
      '.verb.md',
      'LICENSE',
      'package.json'
    ]);
  });
});