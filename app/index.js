/*!
 * generator-verb <https://github.com/assemble/generator-verb>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var glob = require('glob');
var changeCase = require('change-case');
var Configstore = require('configstore');
var normalize = require('normalize-pkg');
var yeoman = require('yeoman-generator');
var namify = require('namify');
var log = require('verbalize');

function introductionMessage() {
  console.log(log.bold('  Head\'s up!'));
  console.log();
  console.log(log.gray('  Verb saves time by offering to re-use answers from the'));
  console.log(log.gray('  previous run. If something is incorrect, no worries!'));
  console.log(log.gray('  Just provide a new value!'));
  console.log();
}

log.runner = 'generator-verb';

var verbConfig = new Configstore('generator-verb');
var userPkg = {};


var VerbGenerator = module.exports = function VerbGenerator() {
  var self = this;

  yeoman.generators.Base.apply(this, arguments);

  // Mix methods from change-case into yeoman's Lo-Dash
  this._.mixin(changeCase);
  this._.mixin({namify: namify});
  this.appname = changeCase.paramCase(this.appname);

  this.readJSON = function() {
    var filepath = path.join.apply(path, arguments);
    return JSON.parse(self.readFileAsString(filepath));
  };

  this.username = this.user.git.username || process.env.user || process.env.username || null;

  if (fs.existsSync('package.json')) {
    userPkg = this.readJSON('package.json');
  }
  if (this.options['p'] || this.options['pkg']) {
    userPkg = normalize.all(userPkg);
  }

  this.on('end', function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'] || this.options['s'],
      skipMessage: this.options['skip-welcome-message'] || this.options['w']
    });
  });
};

util.inherits(VerbGenerator, yeoman.generators.Base);


VerbGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  var prompts = [];

  // have Yeoman greet the user, unless skipped
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
    introductionMessage();
  }

  var author = verbConfig.get('author') || {};

  prompts.push({
    name: 'projectname',
    message: 'Project name?',
    default: userPkg.name ? userPkg.name : this.appname
  });

  prompts.push({
    name: 'projectdesc',
    message: 'Description?',
    default: userPkg.description ? userPkg.description : 'The most interesting project in the world > Verb'
  });

  prompts.push({
    name: 'authorname',
    message: 'Author\'s name?',
    default: author.name || ((userPkg.author && userPkg.author.name) ? userPkg.author.name : this.username)
  });

  prompts.push({
    name: 'authorurl',
    message: 'Author\'s URL?',
    default: author.url || ((userPkg.author && userPkg.author.url) ? userPkg.author.url : ('https://github.com/' + this.username))
  });

  prompts.push({
    name: 'username',
    message: 'GitHub username/org?',
    default: verbConfig.get('username') || this.username
  });

  this.prompt(prompts, function (props) {
    verbConfig.set('username', props.username);
    verbConfig.set('author', {
      name: props.authorname,
      url: props.authorurl
    });

    this.authorname = verbConfig.get('author').name;
    this.authorurl = verbConfig.get('author').url;
    this.username = verbConfig.get('username');

    this.projectname = props.projectname;
    this.projectdesc = props.projectdesc;

    cb();
  }.bind(this));
};


/**
 * Why do `fs.existsSync` when collision detection is
 * already built-in?
 *
 * IMO, it makes for a better experience. This way,
 * if the file already exists, it's simply skipped.
 */

VerbGenerator.prototype.git = function git() {
  if (!fs.existsSync('.gitignore')) {
    this.copy('gitignore', '.gitignore');
  }

  if (!fs.existsSync('.gitattributes')) {
    this.copy('gitattributes', '.gitattributes');
  }
};

VerbGenerator.prototype.index = function index() {
  if (!fs.existsSync('index.js')) {
    this.template('index.js', 'index.js');
  }
};

VerbGenerator.prototype.jshintrc = function jshintrc() {
  if (!fs.existsSync('.jshintrc')) {
    this.copy('jshintrc', '.jshintrc');
  }
};

VerbGenerator.prototype.license = function license() {
  if (!fs.existsSync('LICENSE-MIT')) {
    this.template('LICENSE-MIT');
  }
};

VerbGenerator.prototype.tests = function tests() {
  this.directory('test', 'test', true);
};

VerbGenerator.prototype.travis = function travis() {
  if(this.options['travis']) {
    this.copy('travis.yml', '.travis.yml');
  }
};

function mapper(patterns, cwd) {
  var files = glob.sync(patterns, {cwd: cwd ||__dirname});
  return files.reduce(function (acc, fp) {
    var name = path.basename(fp, path.extname(fp));
    acc[name] = fp.replace(/^[\\\/]*templates[\\\/]*/, '');
    return acc;
  }, {});
}

VerbGenerator.prototype.verb = function verb() {
  var verbfile = 'verb.md';

  var files = mapper('templates/verbfiles/*.md');
  for (var key in files) {
    if (this.options.hasOwnProperty(key)) {
      verbfile = files[key];
      break;
    }
  }

  this.template(verbfile, '.verb.md');
};

VerbGenerator.prototype.contributing = function contributing() {
  var contributing = 'contributing.md';

  var files = mapper('templates/contributing/*.md');
  for (var key in files) {
    if (this.options.hasOwnProperty(key)) {
      contributing = files[key];
      break;
    }
  }

  this.template(contributing, 'CONTRIBUTING.md');
};

VerbGenerator.prototype.pkg = function pkg() {
  var pkgTemplate = this.readFileAsString(__dirname + '/templates/_package.json');
  var verbDefaultPkg = this.engine(pkgTemplate, this);

  // If a package.json already exists, let's try to just update the
  // values we asked about, and leave other data alone.
  if (fs.existsSync('package.json')) {
    var _pkg = this.readJSON('package.json');
    _pkg.devDependencies = _pkg.devDependencies || {};

    // Add any missing properties to the existing package.json
    this._.defaults(_pkg, JSON.parse(verbDefaultPkg));

    // Update some values we asked the user to provide.
    this._.extend(_pkg.name, this.projectname);
    this._.extend(_pkg.description, this.projectdesc);
    this._.extend(_pkg.author.name, this.authorname);
    this._.extend(_pkg.author.url, this.authorurl);

    // Add `verb` to devDependencies. That's why we're here, right?
    this._.extend(_pkg.devDependencies, JSON.parse(verbDefaultPkg).devDependencies);

    fs.unlink('package.json');
    fs.writeFileSync('package.json', JSON.stringify(_pkg, null, 2));
  } else {
    this.template('_package.json', 'package.json');
  }
};
