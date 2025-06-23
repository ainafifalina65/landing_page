import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/landing_page/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'product.html'), // 👈 Add this
            },
        },
    },
});
