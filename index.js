const Compiler = require('uttr-js');

function loader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const compiler = new Compiler();

  return compiler.compile(source);
}

module.exports = loader;
