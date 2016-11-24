import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'lib/main.js',
  dest: 'floating.js',
  format: 'umd',
  moduleName: 'floating',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup']
    }),
    // uglify()
  ]
};
