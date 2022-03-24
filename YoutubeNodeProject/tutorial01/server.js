console.log('Hello Wworld');

const { Server } = require('http');
const os = require('os');
const path = require('path')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename)); //same as using console.log(__dirname);
console.log(path.basename(__filename)); //returns Server.js
console.log(path.extname(__filename)); //returns .js

console.log(path.parse(__filename));