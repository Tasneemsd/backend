const express = require('express');
const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
}


function auth(req, res, next) {
    const token = req.headers['authorization'];
    console.log('Received token:', token);
    if (token === 's3cret24') {
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid token');
    }
}

app.use(logger);

app.get('/open', (req, res) => {
    res.send('Public route, no auth needed');
});

app.get('/secure', auth, (req, res) => {
    res.send('Protected route, auth successful');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
