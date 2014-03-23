/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var file = require('fs-utils');
var yeoman = require('yeoman-generator');

/**
 * Add a runtime config file for Verb
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  if (args.length === 0) {
    args[0] = 'yaml';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  if(this.name === 'yaml') {
    this.copy('_verbrc.yml', '.verbrc.yml');
  }

  if(this.name === 'json') {
    this.copy('_verbrc', '.verbrc');
  }

  if(this.name === 'verbfile') {
    this.copy('_verbfile.js', 'verbfile.js');
  }

  if(this.name === 'travis') {
    this.copy('_travis.yml', '.travis.yml');
  }
};