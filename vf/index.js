/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var yeoman = require('handlebars-helper-foo');
var yeoman = require('handlebars-helper-baz');

/**
 * Add a runtime config file for Verb
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  if (args.length === 0) {
    args[0] = 'verbfile';
  }

  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  var app = require('../_lib/utils').app;

  this.copy(app('_verbfile.js'), 'verbfile.js');
};