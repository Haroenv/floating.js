import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/main.js',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'babili'],
    }),
  ],
  targets: [
    { dest: 'build/floating.js', format: 'umd', moduleName: 'floating' },
    { dest: 'build/floating.es.js', format: 'es' },
  ],
};
