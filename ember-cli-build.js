const Funnel = require('broccoli-funnel');
const ts = require('broccoli-typescript-compiler').typescript;

module.exports = function() {
  let lib = new Funnel('lib');
  return ts(lib);
}
