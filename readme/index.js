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
var dir = require('../_lib/utils');


var VerbGenerator = module.exports = function VerbGenerator(args, config, options) {
  if (args.length === 0) {
    args[0] = 'verbrc';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
};
util.inherits(VerbGenerator, yeoman.generators.NamedBase);


VerbGenerator.prototype.files = function files() {
  if (this.name === 'verbrc') {
    this.copy(dir.config('verbrc.md'), '.verbrc.md');
  }
};