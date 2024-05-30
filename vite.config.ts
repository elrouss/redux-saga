import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const SRC_PATH = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, SRC_PATH) }],
  },
})
