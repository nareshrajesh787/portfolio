import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import fs from 'fs';
const css = fs.readFileSync('app/globals.css', 'utf8');
postcss([tailwindcss()]).process(css + '\n.test { @apply bg-brand-500 text-brand-500; }', { from: 'app/globals.css' }).then(result => fs.writeFileSync('out.css', result.css));
