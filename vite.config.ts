/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig, UserConfig, ConfigEnv, LibraryFormats, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isPlaygroundBuild = mode === 'playground' && command === 'build'

  const commonPlugins: PluginOption[] = [react(), tailwindcss()]

  const commonResolve = {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }

  const commonTest = {
    root: resolve(__dirname),
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/lib/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      include: ['src/lib/components'],
      exclude: ['**/*.stories.tsx'],
    },
  }

  if (isPlaygroundBuild) {
    return {
      root: 'src/playground',
      plugins: commonPlugins, // Use common plugins
      resolve: commonResolve,
      build: {
        outDir: resolve(__dirname, 'dist-playground'),
        emptyOutDir: true,
      },
      test: commonTest,
    }
  }

  const libraryPlugins: PluginOption[] = [
    ...commonPlugins,
    libInjectCss(),
    dts({
      tsconfigPath: 'tsconfig.lib.json',
    }),
  ]

  const libraryBuildConfig = {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'LazyChat',
      formats: ['es', 'umd'] as LibraryFormats[],
      fileName: (format: string) => `lazy-chat-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'reactJsxRuntime',
        },
      },
    },
    emptyOutDir: true,
  }

  if (command === 'serve') {
    return {
      root: 'src/playground',
      plugins: libraryPlugins,
      resolve: commonResolve,
      build: libraryBuildConfig,
      test: commonTest,
    }
  } else {
    return {
      plugins: libraryPlugins,
      resolve: commonResolve,
      build: libraryBuildConfig,
      test: commonTest,
    }
  }
})
