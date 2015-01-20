var fs = require('fs');

var path = process.argv[2];

var buffer = fs.readFileSync(path);

var content = buffer.toString();

var lines = content.split('\n');

console.log(lines.length - 1);