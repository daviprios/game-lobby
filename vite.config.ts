import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig(async () => ({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
	},
	envPrefix: ['VITE_', 'TAURI_'],
	build: {
		target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
		minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
		sourcemap: !!process.env.TAURI_DEBUG,
	},
}))
