import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  // UMD build for <script> tag usage
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/ehrkjs.umd.js',
      format: 'umd',
      name: 'ehrkjs', // window.ehrkjs
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  // ESM build for modern bundlers
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/ehrkjs.esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
];
