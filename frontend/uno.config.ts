import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // Safelist to ensure certain classes are always available
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  // Custom rules
  rules: [
    // Custom rules can be added here
  ],
  // Shortcuts for commonly used combinations
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-primary': 'text-white bg-blue-500 hover:bg-blue-700',
  },
  // Theme configuration
  theme: {
    colors: {
      // Custom colors can be added here
    },
  },
  // Enable strict mode for better DX
  strict: true,
  // Check source code for invalid class names
  content: {
    pipeline: {
      include: [
        // include tsx files
        '**/*.{jsx,tsx,html}',
      ],
      exclude: ['node_modules/**/*', '.git/**/*', 'dist/**/*'],
    },
  },
});
