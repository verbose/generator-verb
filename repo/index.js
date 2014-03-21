// 'use strict';
// var util = require('util');
// var path = require('path');
// var yeoman = require('yeoman-generator');

// var VerbGenerator = module.exports = function VerbGenerator(args, options, config) {
//   yeoman.generators.Base.apply(this, arguments);

//   this.on('end', function () {
//     this.installDependencies({
//       skipInstall: this.options['skip-install'] || this.options['s'],
//       skipMessage: this.options['skip-welcome-message'] || this.options['w']
//     });
//   });


//   this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
// };

// util.inherits(VerbGenerator, yeoman.generators.Base);

// VerbGenerator.prototype.askFor = function askFor() {
//   var cb = this.async();
//   var prompts = [];

//   // have Yeoman greet the user unless skipped
//   if (!this.options['skip-welcome-message']) {
//     console.log(this.yeoman);
//   }

//   var username = this.user.git.username || process.env.user || process.env.username || 'placeholder';

//   prompts.push({
//     name: 'authorName',
//     message: 'What is the author\'s name?',
//     default: username
//   });

//   prompts.push({
//     name: 'projectName',
//     message: 'What do you want to call your project?',
//     default: this.appname
//   });

//   prompts.push({
//     name: 'authorUsername',
//     message: 'What username or org will the repo use on GitHub?',
//     default: username
//   });

//   this.prompt(prompts, function (props) {
//     this.authorName = props.authorName;
//     this.projectName = props.projectName;
//     this.authorUsername = props.authorUsername;

//     cb();
//   }.bind(this));
// };

// VerbGenerator.prototype.app = function app() {
//   this.mkdir('docs');
//   this.template('_README.tmpl.md', 'docs/README.tmpl.md');
// };

// VerbGenerator.prototype.runtime = function runtime() {
//   this.copy('_verbrc.yml', '.verbrc.yml');
// };