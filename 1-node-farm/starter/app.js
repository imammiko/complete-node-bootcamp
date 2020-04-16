const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textout = `this is what we know about the avocado:${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textout);
console.log('File writeen');