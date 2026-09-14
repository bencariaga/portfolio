// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://bencariaga.github.io',
    base: '/portfolio',
    vite: {
        plugins: [tailwindcss()],
    },
    server: {
        port: 3000,
        host: true,
    },
    image: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.credly.com',
            },
        ],
    },
});
