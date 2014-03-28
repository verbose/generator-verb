/**
 * generator-verb <https://github.com/assemble/generator-ver>
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
var _ = require('lodash');


log.runner = 'generator-verb';
var verbConfig = new Configstore('generator-verb');
var userPkg = {};


var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  var self = this;

  this.readJSON = function() {
    var filepath = path.join.apply(path, arguments);
    return JSON.parse(self.readFileAsString(filepath));
  };

  this.on('end', function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'] || this.options['s'],
      skipMessage: this.options['skip-welcome-message'] || this.options['w']
    });
  });

  this.pkg = this.readJSON(__dirname, '../package.json');

  this.username = this.user.git.username || process.env.user || process.env.username || null;

  if (fs.existsSync('package.json')) {
    userPkg = normalize.all(this.readJSON('package.json'));
  }
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
    default: verbConfig.get('author').name || (userPkg.author.name ? userPkg.author.name : this.username)
  });

  prompts.push({
    name: 'authorurl',
    message: 'What is the author\'s URL?',
    default: verbConfig.get('author').url || (userPkg.author.url ? userPkg.author.url : ('https://github.com/' + this.username))
  });

  prompts.push({
    name: 'username',
    message: 'If pushed to GitHub, what username/org will the repo use?',
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

VerbGenerator.prototype.app = function app() {
  this.mkdir('docs');

  if (!fs.existsSync('docs/README.tmpl.md')) {
    this.template('README.tmpl.md', 'docs/README.tmpl.md');
  }

  var pkgTemplate = this.readFileAsString(path.join(this.sourceRoot(), './_package.json'));
  var verbDefaultPkg = this.engine(pkgTemplate, this);

  // If a package.json already exists, let's try to just update the
  // values we asked about, and leave other data alone.
  if (fs.existsSync('package.json')) {
    var pkg = this.readJSON('package.json');
    pkg.devDependencies = pkg.devDependencies || {};

    // Add any missing properties to the existing package.json
    _.defaults(pkg, JSON.parse(verbDefaultPkg));

    // Update some values we asked the user to provide.
    _.extend(pkg.name, this.projectname);
    _.extend(pkg.description, this.projectdesc);
    _.extend(pkg.author.name, this.authorname);
    _.extend(pkg.author.url, this.authorurl);

    // Add `verb` to devDependencies. That's why we're here, right?
    _.extend(pkg.devDependencies, JSON.parse(verbDefaultPkg).devDependencies);

    fs.unlink('package.json');
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  } else {
    this.template('_package.json', 'package.json');
  }
};


VerbGenerator.prototype.verbfile = function verbfile() {
  if (!fs.existsSync('.verbrc.yml')) {
    this.copy('verbrc.yml', '.verbrc.yml');
  }
};

VerbGenerator.prototype.jshintrc = function jshintrc() {
  if (!fs.existsSync('.jshintrc')) {
    this.copy('jshintrc', '.jshintrc');
  }
};

VerbGenerator.prototype.git = function git() {
  if (!fs.existsSync('.gitignore')) {
    this.copy('gitignore', '.gitignore');
  }

  if (!fs.existsSync('.gitattributes')) {
    this.copy('gitattributes', '.gitattributes');
  }
};

VerbGenerator.prototype.license = function license() {
  if (!fs.existsSync('LICENSE-MIT')) {
    this.template('LICENSE-MIT');
  }
};

function introductionMessage() {
  console.log(log.bold('  Head\'s up!'));
  console.log();
  console.log(log.gray('  Verb saves time by offering to re-use answers from the'));
  console.log(log.gray('  previous run. If something is incorrect, no worries!'));
  console.log(log.gray('  Just provide a new value!'));
  console.log();
}