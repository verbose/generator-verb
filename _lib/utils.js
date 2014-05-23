var path = require('path');

exports.app = function(filepath) {
  return path.join(__dirname, '../app/templates', filepath);
};

exports.config = function(filepath) {
  return path.join(__dirname, '../config/templates', filepath);
};

exports.data = function(filepath) {
  return path.join(__dirname, '../data/templates', filepath);
};

exports.doc = function(filepath) {
  return path.join(__dirname, '../doc/templates', filepath);
};

exports.readme = function(filepath) {
  return path.join(__dirname, '../readme/templates', filepath);
};

exports.root = function(filepath) {
  return path.join(__dirname, '../root/templates', filepath);
};