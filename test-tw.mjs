import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import fs from 'fs';
const css = fs.readFileSync('app/globals.css', 'utf8');
try {
  const result = await postcss([tailwindcss()]).process(css + '\n.test { @apply bg-brand-500 text-brand-500; }', { from: 'app/globals.css' });
  console.log("SUCCESS:");
  console.log(result.css.split('\n').filter(line => line.includes('.test')).join('\n'));
} catch (e) {
  console.error("ERROR:");
  console.error(e.message);
}
