import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'un-',
      strict: true,
    }),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  // Safelist to ensure certain classes are always available
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  // Custom rules
  rules: [['custom-rule', { color: 'red' }]],
  // Shortcuts for commonly used combinations
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md transition-colors duration-200',
    'btn-primary': 'text-white bg-blue-500 hover:bg-blue-700',
    'btn-secondary': 'text-white bg-gray-500 hover:bg-gray-700',
    card: 'p-4 bg-white rounded-lg shadow-md',
    input:
      'px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
    container: 'max-w-screen-xl mx-auto px-4',
  },
  // Theme configuration
  theme: {
    colors: {
      brand: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#f56565',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  // Check source code for invalid class names
  content: {
    pipeline: {
      include: [
        // only include TypeScript files
        '**/*.{tsx,html}',
      ],
      exclude: ['node_modules/**/*', '.git/**/*', 'dist/**/*'],
    },
  },
});
