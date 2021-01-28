import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './lib/temp.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    // commonjs({
    //     include: 'node_modules/**',
    //     exclude: '**/*.css',
    //     namedExports: {
    //       'react': ['useEffect', 'useState'],
    //       'ink': ['render', 'Color']
    //     },
    //     include: 'node_modules/**',
    //     extensions: [ '.js' ],
    //     sourceMap: false,
    //     ignoreGlobal: false,
    //     ignore: [ 'conditional-runtime-dependency' ],

    // })
  ]
};