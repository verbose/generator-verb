/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('verb', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:app', ['../../app']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      'package.json',
      '.verb.md',
      '.jshintrc',
      '.gitignore',
      '.gitattributes',
      'LICENSE-MIT',
    ];

    helpers.mockPrompt(this.app, {
      projectname: 'verb-project',
      projectdesc: 'The most interesting project in the world > Verb',
      username:    'jonschlinkert',
      authorname:  'Jon Schlinkert',
      authorurl:   'https://github.com/jonschlinkert',
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

describe('verb', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:app', ['../../app']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.verb.md',
      'package.json',
      '.jshintrc',
      '.gitignore',
      '.gitattributes',
      'LICENSE-MIT',
    ];

    helpers.mockPrompt(this.app, {
      projectname: 'verb-project',
      projectdesc: 'The most interesting project in the world > Verb',
      username:    'jonschlinkert',
      authorname:  'Jon Schlinkert',
      authorurl:   'https://github.com/jonschlinkert',
    });

    this.app.options['readme'] = true;
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

/**
 * Config
 */

describe('verb:doc', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:doc', ['../../doc'], 'authors.md');
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [process.cwd() + '/docs/authors.md'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
