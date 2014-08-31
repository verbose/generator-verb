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
var yeoman = require('yeoman-generator');
var boilerplate = path.dirname(require.resolve('verb-boilerplates'));


var VerbGenerator = module.exports = function VerbGenerator(args) {
  // Use the 'node' boilerplate the default
  if (args.length === 0) {
    args[0] = 'node';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
};
util.inherits(VerbGenerator, yeoman.generators.NamedBase);


VerbGenerator.prototype.files = function files() {
  var dir = path.join(boilerplate, this.name);

  var fn = {};
  fn.shortname = require('app-name');
  fn.namify = require('namify');
  this._.mixin(fn);

  if(!fs.existsSync(dir)) {
    this.log.error('"' + dir + '" is not a valid boilerplate.');
  }

  this.directory(dir, process.cwd());
};