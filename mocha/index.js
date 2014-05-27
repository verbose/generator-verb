/*
 * generator-verb <https://github.com/jonschlinkert/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var namify = require('namify');


var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  if (args.length === 0) {
    args[0] = 'mocha';
  }
  yeoman.generators.NamedBase.apply(this, arguments);
  console.log(this);
  this._.mixin({namify: namify});
};
util.inherits(VerbGenerator, yeoman.generators.NamedBase);


VerbGenerator.prototype.testFiles = function testFiles() {
  if(this.name === 'mocha') {
    this.template('mocha.opts', 'test/mocha.opts');
    this.template('test.js', 'test/test.js');
  }
};