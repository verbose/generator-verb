/*
 * generator-verb <https://github.com/assemble/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var util = require('util');
var yeoman = require('yeoman-generator');
var Configstore = require('configstore');
var verbConfig = new Configstore('generator-verb');

var VerbGenerator = module.exports = function VerbGenerator(args) {
  if (args.length === 0) {
    args[0] = 'root';
  }
  var self = this;
  yeoman.generators.Base.apply(this, arguments);

  this.authorname = this.authorname || verbConfig.authorname || this.options.authorname;
  this.authorurl = this.authorurl || this.options.authorurl;
  this.username = this.username || this.options.username;

  this.projectname = this.projectname || this.options.projectname;
  this.projectdesc = this.projectdesc || this.options.projectdesc;
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);


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

VerbGenerator.prototype.travis = function travis() {
  if(this.name === 'travis') {
    this.copy('travis.yml', '.travis.yml');
  }
};
