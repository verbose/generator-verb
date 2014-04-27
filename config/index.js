/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var dir = require('../_lib/utils');


/**
 * Add a Verb config file
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

  if (args.length === 0) {
    args[0] = 'md';
  }
};
util.inherits(VerbGenerator, yeoman.generators.NamedBase);


VerbGenerator.prototype.files = function files() {

  /**
   * Runtime config
   */

  if(this.name === 'yml' || this.name === 'verbrc') {
    this.template('verbrc.yml', '.verbrc.yml');
  }

  if(this.name === 'md') {
    this.copy('verbrc.md', '.verbrc.md');
  }


  /**
   * Verbfile
   */


  if(this.name === 'vf' || this.name === 'verbfile') {
    this.copy('verbfile.js', 'verbfile.js');
  }


  /**
   * Other config files
   */

  if(this.name === 'bowerrc') {
    this.copy(dir.root('bowerrc'), '.bowerrc');
  }

  if(this.name === 'jshint') {
    this.copy(dir.root('jshintrc'), '.jshintrc');
  }

  if(this.name === 'gi' || this.name === 'gitignore') {
    this.copy(dir.root('gitignore'), '.gitignore');
  }

  if(this.name === 'ga' || this.name === 'gitattributes') {
    this.copy(dir.root('gitattributes'), '.gitattributes');
  }

  if(this.name === 'pkg' || this.name === 'package') {
    this.template(dir.root('_package.json'), 'package.json');
  }
};