'use strict';
var util = require('util');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'] || this.options['s'],
      skipMessage: this.options['skip-welcome-message'] || this.options['w']
    });
  });


  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(VerbGenerator, yeoman.generators.Base);

VerbGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  var prompts = [];

  // have Yeoman greet the user unless skipped
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
  }

  var username = this.user.git.username || process.env.user || process.env.username || 'placeholder';

  prompts.push({
    name: 'author',
    message: 'What is the author\'s name?',
    default: username
  });

  prompts.push({
    name: 'projectname',
    message: 'What do you want to call your project?',
    default: this.appname
  });

  prompts.push({
    name: 'username',
    message: 'What username or org will the repo use on GitHub?',
    default: username
  });

  prompts.push({
    name: 'description',
    message: 'Project description?',
    default: 'The most interesting project in the world > Verb.'
  });

  this.prompt(prompts, function (props) {
    this.projectname = (props.projectname).replace(/^[ _]|[ _]$/g, '');
    this.description = props.description;
    this.username = props.username;
    this.author = props.author;

    cb();
  }.bind(this));
};

VerbGenerator.prototype.app = function app() {
  this.mkdir('docs');
  this.template('_README.tmpl.md', 'docs/README.tmpl.md');

  var pkgTemplate = this.readFileAsString(path.join(this.sourceRoot(), './_package.json'));
  var completePkg = this.engine(pkgTemplate, this);

  if (fs.existsSync('package.json')) {
    var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    pkg.devDependencies = pkg.devDependencies || {};
    _.merge(pkg, JSON.parse(completePkg));

    fs.unlink('package.json');
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  } else {
    this.template('_package.json', 'package.json');
  }

};

VerbGenerator.prototype.runtime = function runtime() {
  if (!fs.existsSync('.verbrc.yml') && !fs.existsSync('.verbrc')) {
    this.copy('_verbrc.yml', '.verbrc.yml');
  }
};