import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import ViteImages from 'vite-plugin-vue-images'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            publicDirectory: "public_html",
            refresh: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "resources/js/src/assets/img",
                    dest: "../build/assets",
                },
            ],
            publicDirectory: "public_html",
        }),
        ViteImages({
            //dirs: ['src/assets'], // relative path to the image directory
            extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // valid image extensions
            customResolvers:[], // Override the default behavior of name->image path resolution
            customSearchRegex: '([a-zA-Z0-9]+)', // Override the Regex that searches for the variable to replace.
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
        }
    },
});
