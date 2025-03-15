import typescript from '@rollup/plugin-typescript';

export default {
    input: {
        index: 'src/core/checkHeadingOrder.ts',
        react: 'src/react/useHeadingOrder.tsx',
        vue: 'src/vue/useHeadingOrder.ts'
    },
    output: [
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].js'
        }
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
    external: ['react', 'vue']
};
