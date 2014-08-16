/*
 * generator-verb <https://github.com/assemble/generator-verb>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var exec = require('child_process').exec;
var changeCase = require('change-case');
var Configstore = require('configstore');
var dir = require('../_lib/utils');
var log = require('verbalize');
var namify = require('namify');
var normalize = require('normalize-pkg');
var yeoman = require('yeoman-generator');

var store = new Configstore('generator-verb');


var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);

  // Mix methods from change-case into yeoman's instance of Lo-Dash
  this._.mixin(changeCase);
  this._.mixin({namify: namify});

  this.username    =  this.username || this.options.username || this.user.git.username || process.env.user || process.env.username || null;
  this.authorname  = this.authorname || store.authorname || this.options.authorname;
  this.authorurl   = this.authorurl || this.options.authorurl;
  this.username    = this.username || this.options.username;
  this.projectname = this.projectname || this.options.projectname;
  this.projectdesc = this.projectdesc || this.options.projectdesc;
  this.jscomments  = this.jscomments || false;
  this.invoked     = options.invoked;
};
util.inherits(VerbGenerator, yeoman.generators.Base);


VerbGenerator.prototype.askFor = function askFor() {
  var cb = this.async();
  var prompts = [];

  if (this.invoked) {
    cb();
  } else {
    prompts.push({
      type: 'confirm',
      name: 'jscomments',
      message: 'Want to use the jscomments() tag to generate API docs from code comments?',
      default: true
    });

    this.prompt(prompts, function (props) {
      this.jscomments = props.jscomments;
      cb();
    }.bind(this));
  }
};

VerbGenerator.prototype.files = function files() {
  if (this.jscomments || this.invoked) {
    this.copy(dir.config('jscomments.md'), '.verbrc.md');
  } else {
    this.copy(dir.config('verbrc.md'), '.verbrc.md');
  }
};