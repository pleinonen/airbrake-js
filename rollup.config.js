import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const pkg = require('./package.json');

export default {
  input: 'src/client.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'airbrakeJs.Client',
      banner: `/* airbrake-js v${pkg.version} */`,
    },
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
    }),
    commonjs(),
    typescript(),
    terser({
      include: [/^.+\.min\.js$/, '*esm*'],
    }),
  ],
};
