/*!
 * generator-verb <https://github.com/assemble/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');


var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.hookFor('verb:core', {
    args: args,
    options: options,
    config: config
  });
};

util.inherits(VerbGenerator, yeoman.generators.Base);


VerbGenerator.prototype.startHook = function startHook() {};