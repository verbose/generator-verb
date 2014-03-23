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
 * Add a README template to your project
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  if (args.length === 0) {
    args[0] = 'README.tmpl';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
};
util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  this.copy('_README.tmpl.md', 'docs/README.tmpl.md');
};