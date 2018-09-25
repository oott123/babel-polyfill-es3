var fs = require('fs');
var transform = require('es3ify').transform;
var js = transform(fs.readFileSync('./node_modules/babel-polyfill/dist/polyfill.min.js').toString());
fs.writeFileSync('polyfill-es3.min.js', js);