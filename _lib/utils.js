exports.app = function(filepath) {
  return require('path').join('../../app/templates', filepath);
};

exports.config = function(filepath) {
  return require('path').join('../../config/templates', filepath);
};

exports.data = function(filepath) {
  return require('path').join('../../data/templates', filepath);
};

exports.doc = function(filepath) {
  return require('path').join('../../doc/templates', filepath);
};

exports.readme = function(filepath) {
  return require('path').join('../../readme/templates', filepath);
};