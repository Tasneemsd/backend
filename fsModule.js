const fs = require('fs');
fs.writeFileSync('new.txt', 'Hello Im new file');

const content = fs.readFileSync('new.txt', 'utf8');
console.log(content);

const updateOne = fs.appendFileSync('new.txt', '\nHello im back');


const content2 = fs.readFileSync('new.txt', 'utf8');
console.log(content2);

const content3 = fs.unlinkSync('new.txt', 'deleted');
console.log(content)
