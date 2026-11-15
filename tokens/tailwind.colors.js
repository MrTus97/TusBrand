/**
 * Màu TUS cho Tailwind — nguồn: tokens/colors.json
 *
 * Cách dùng trong tailwind.config.js:
 *
 *   const tus = require('./tokens/tailwind.colors')
 *   module.exports = {
 *     darkMode: 'class',
 *     theme: { extend: { colors: { tus } } },
 *   }
 *
 * Ví dụ:
 *   <body class="bg-tus-bg text-tus-text dark:bg-tus-dark-bg dark:text-tus-dark-text">
 *   <span class="text-tus-logo dark:text-tus-dark-logo">…</span>
 */
module.exports = {
  brand: '#251097',
  'brand-light': '#8B7CFF',

  logo: '#251097',
  bg: '#FFFFFF',
  surface: '#F3F3F3',
  border: '#E5E5E5',
  text: '#1F1F1F',
  muted: '#616161',

  dark: {
    logo: '#8B7CFF',
    bg: '#1E1E1E',
    surface: '#181818',
    border: '#2B2B2B',
    text: '#CCCCCC',
    muted: '#9D9D9D',
  },
}
