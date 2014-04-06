/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Add a config file
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  if (args.length === 0) {
    args[0] = 'verbrc';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  var app = require('../_lib/utils').app;

  /**
   * Verb runtime config
   */

  if(this.name === 'verbrc') {
    this.template(app('verbrc.yml'), '.verbrc.yml');
  }

  if(this.name === 'vf' || this.name === 'verbfile') {
    this.template('_verbfile.js', 'verbfile.js');
  }

  /**
   * Other config files
   */

  if(this.name === 'bowerrc') {
    this.copy(app('bowerrc'), '.bowerrc');
  }

  if(this.name === 'jshint') {
    this.copy(app('jshintrc'), '.jshintrc');
  }

  if(this.name === 'gi' || this.name === 'gitignore') {
    this.copy(app('gitignore'), '.gitignore');
  }

  if(this.name === 'ga' || this.name === 'gitattributes') {
    this.copy(app('gitattributes'), '.gitattributes');
  }

  if(this.name === 'pkg' || this.name === 'package') {
    this.template(app('_package.json'), 'package.json');
  }

  if(this.name === 'travis') {
    this.copy('travis.yml', '.travis.yml');
  }
};