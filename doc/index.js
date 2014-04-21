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
  if (args.length === 0) {
    args[0] = 'install';
  }
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
  var name = this.name + '.md';
  this.template(path.join(includeDir, name), path.join('docs', name));
};