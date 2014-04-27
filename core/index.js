/*!
 * generator-verb <https://github.com/assemble/generator-verb>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var changeCase = require('change-case');
var Configstore = require('configstore');
var normalize = require('normalize-pkg');
var yeoman = require('yeoman-generator');
var log = require('verbalize');
var dir = require('../_lib/utils');

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

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  var self = this;

  // Mix methods from change-case into yeoman's Lo-Dash
  this._.mixin(changeCase);
  this.appname = changeCase.paramCase(this.appname);

  this.readJSON = function() {
    var filepath = path.join.apply(path, arguments);
    return JSON.parse(self.readFileAsString(filepath));
  };

  this.pkg = this.readJSON(__dirname, '../package.json');
  this.username = this.user.git.username || process.env.user || process.env.username || null;

  if (fs.existsSync('package.json') && (this.options['p'] || this.options['pkg'])) {
    userPkg = normalize.all(this.readJSON('package.json'));
  }

  this.on('end', function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'] || this.options['s'],
      skipMessage: this.options['skip-welcome-message'] || this.options['w']
    });
  });

  this.hookFor('verb:root', {
    args: args,
    options: options,
    config: config
  });

  this.hookFor('verb:readme', {
    args: args,
    options: options,
    config: config
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
    message: 'What is the name of the project?',
    default: userPkg.name ? userPkg.name : this.appname
  });

  prompts.push({
    name: 'projectdesc',
    message: 'Want to add a description?',
    default: userPkg.description || 'The most interesting project in the world > Verb'
  });

  prompts.push({
    name: 'authorname',
    message: 'What is the author\'s name?',
    default: author.name || ((userPkg.author && userPkg.author.name) ? userPkg.author.name : this.username)
  });

  prompts.push({
    name: 'authorurl',
    message: 'What is the author\'s URL?',
    default: author.url || ((userPkg.author && userPkg.author.url) ? userPkg.author.url : ('https://github.com/' + this.username))
  });

  prompts.push({
    name: 'username',
    message: 'If pushed to GitHub, what will the username/org be?',
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

VerbGenerator.prototype.pkg = function pkg() {
  var pkgTemplate = this.readFileAsString(dir.root('_package.json'));
  var verbDefaultPkg = this.engine(pkgTemplate, this);

  // If a package.json already exists, let's try to just update the
  // values we asked about, and leave other data alone.
  if (fs.existsSync('package.json')) {
    var pkg = this.readJSON('package.json');
    pkg.devDependencies = pkg.devDependencies || {};

    // Add any missing properties to the existing package.json
    this._.defaults(pkg, JSON.parse(verbDefaultPkg));

    // Update some values we asked the user to provide.
    this._.extend(pkg.name, this.projectname);
    this._.extend(pkg.description, this.projectdesc);
    this._.extend(pkg.author.name, this.authorname);
    this._.extend(pkg.author.url, this.authorurl);

    // Add `verb` to devDependencies. That's why we're here, right?
    this._.extend(pkg.devDependencies, JSON.parse(verbDefaultPkg).devDependencies);

    fs.unlink('package.json');
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  } else {
    this.template(dir.root('_package.json'), 'package.json');
  }
};