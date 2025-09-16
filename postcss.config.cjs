const semverMajor = (v) => parseInt(String(v).split('.')[0] || '0', 10);
let tailwindPlugin;
try {
  const twVersion = require('tailwindcss/package.json').version;
  tailwindPlugin = semverMajor(twVersion) >= 4 ? require('@tailwindcss/postcss') : require('tailwindcss');
} catch (e) {
  // Fallback to new plugin if detection fails
  try { tailwindPlugin = require('@tailwindcss/postcss'); } catch { tailwindPlugin = require('tailwindcss'); }
}

module.exports = {
  plugins: [
    tailwindPlugin,
    require('autoprefixer'),
  ],
};
