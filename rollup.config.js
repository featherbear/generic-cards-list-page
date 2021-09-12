import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import HJSON from 'hjson';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import svelteSVG from "rollup-plugin-svelte-svg";

const production = !process.env.ROLLUP_WATCH;

let json_plugin = json({ compact: true })
let hjson_plugin = {
  name: 'hjson',
  transform(hjson, id) {
    if (id.slice(-6) !== '.hjson') return null;
    return json_plugin.transform(JSON.stringify(HJSON.parse(hjson)), id + ".json" )
  }
}

export default {
	input: 'src/entry.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		hjson_plugin,     
		json_plugin,
		svelteSVG(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
