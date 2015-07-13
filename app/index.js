'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var RpsGenerator = module.exports = function RpsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {

    this.installDependencies({ 
      skipInstall: options['skip-install'],
      callback: function () {
        console.log(chalk.red("Run ") + chalk.bold.yellow("'grunt'") + chalk.red(" to build out your assets"));
        console.log(chalk.red("Run ") + chalk.bold.yellow("'grunt server'") + chalk.red(" to spin up a local web server to view your project"));
      }
    });

  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(RpsGenerator, yeoman.generators.Base);

RpsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What would you like to call this project?',
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

RpsGenerator.prototype.app = function app() {
  //
};

RpsGenerator.prototype.projectfiles = function projectfiles() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_bowerrc', '.bowerrc');
  this.template('_Gruntfile.coffee', 'Gruntfile.coffee');
};

RpsGenerator.prototype.runtime = function runtime() {
  this.copy('gitignore', '.gitignore');
  this.directory('public', 'public');
  this.directory('scss', 'scss');
  this.directory('coffee', 'coffee');
  this.directory('data', 'data');
  this.directory('specs', 'specs');
  this.directory('templates', 'templates');
  this.directory('features', 'features');
  this.directory('reports', 'reports');
  this.directory('opt-iRpss', 'opt-iRpss');
  this.directory('grunt', 'grunt');
};
