const path = require('path');

module.exports = {
	description:
		'throws with an extended error message when failing to parse a file with ".json" extension',
	error: {
		code: 'PARSE_ERROR',
		message: 'Unexpected token (Note that you need rollup-plugin-json to import JSON files)',
		pos: 10,
		loc: {
			file: path.resolve(__dirname, 'file.json'),
			line: 2,
			column: 8
		},
		frame: `
			1: {
			2:   "JSON": "is not really JavaScript"
			           ^
			3: }
		`
	}
};
