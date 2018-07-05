
const commonjs = require('rollup-plugin-commonjs');
const nodeGlobals = require('rollup-plugin-node-globals');
const nodeBuiltins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const jsonPlugin = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/mongodb-extjson.js',
    format: 'umd',
    name: 'mongodb-extjson',
  },
  plugins: [
    jsonPlugin(),
    nodeBuiltins(),
    nodeResolve(),
    commonjs(),
    nodeGlobals(),
    babel({
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ]
    })
  ],
  external: ['bson'],
}
