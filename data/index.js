/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var util = require('util');
var verb = require('verb');
var yeoman = require('yeoman-generator');

/**
 * Add a data file for Verb
 */

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  var self = this;

  var src = function(str) {
    return path.join(self._sourceRoot, str);
  };
  var changelog = this.readFileAsString(src('_changelog.yml'));

  if(this.name === 'changelog') {
    this.write('CHANGELOG', verb.process(changelog).content);
  }
};