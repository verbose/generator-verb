exports.app = function(filepath) {
  return require('path').join('../../app/templates', filepath);
};