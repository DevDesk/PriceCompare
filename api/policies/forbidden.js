
module.exports = function(req, res, next) {
  return res.forbidden('You are not permitted to access this file');
}