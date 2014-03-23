var path = require('path');

exports.app = function(filepath) {
  return path.join('../../app/templates', filepath);
};
