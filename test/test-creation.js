/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('verb generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('verb:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // Runtime config
      '.verbrc.yml',
      'package.json',
      'docs/README.tmpl.md'
    ];

    helpers.mockPrompt(this.app, {
      projectName: 'assemble-project',
      description: 'The most interesting project in the world > Verb',
      username: 'assemble',
      author: 'Assemble'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
