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
      'docs/README.tmpl.md',
      'package.json',
      '.verbrc.yml',
      '.jshintrc',
      '.gitignore',
      '.gitattributes',
      'LICENSE-MIT',
    ];

    helpers.mockPrompt(this.app, {
      projectname: 'verb-project',
      projectdesc: 'The most interesting project in the world > Verb',
      username: 'jonschlinkert',
      authorname: 'Jon Schlinkert',
      authorurl: 'https://github.com/jonschlinkert',
    });

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

describe('verb:config', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:config', ['../../config']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['.verbrc.yml'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

describe('verb:config verbfile', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:config', ['../../config'], ['verbfile']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['verbfile.js'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

describe('verb:config verbrc', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:config', ['../../config'], ['verbrc']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['.verbrc.yml'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

/**
 * Data
 */

describe('verb:data', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:data', ['../../data'], ['changelog']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['CHANGELOG'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

/**
 * doc
 */

describe('verb:doc', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:doc', ['../../doc'], ['footer']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['docs/footer.md'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});


describe('verb:readme', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:readme', ['../../readme']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['docs/README.tmpl.md'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});


describe('verb:vf', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {return done(err);}

      this.app = helpers.createGenerator('verb:vf', ['../../vf']);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = ['verbfile.js'];

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
