/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var includes = path.dirname(require.resolve('verb-readme-includes'));
var includeDir = path.join(includes, 'templates');

var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(VerbGenerator, yeoman.generators.NamedBase);

VerbGenerator.prototype.files = function files() {
  var self = this;

  this.conflicter.resolve(function (err) {
    if(self.name === 'docs') {
      self.log.error('"docs" is not a valid file name', err);
    }
  });

  this.template(path.join(includeDir, this.name), path.join('docs', this.name));
};