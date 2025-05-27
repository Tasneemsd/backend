/* whatever we place here works perfectly  It is same as app.jsx in frontend */
/* node server.js to run */

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from NODE.js server !!');
});
server.listen(3000, () => {
    console.log('server running');
});


const os = require('os');
console.log('Os platform:', os.platform());

const add = require('./math');
console.log(add(24, 6));

const moment = require('moment');
console.log(moment("22-05-2025", "DD MM YYYY").format('MMM Do'));


console.log(moment().subtract(8, 'months').format('DD MM YYYY'));