const express = require('express');
const https = require('https');

const app = express();
const port = 3000;
const apiUrl = 'https://reqres.in/api/users?page=2';

app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is dummy JSON data API");
});

app.get('/apiData', (req, res) => {
    https.get(apiUrl, (apiRes) => {
        let data = '';


        apiRes.on('data', (chunk) => {
            data += chunk;
        });

 
        apiRes.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (err) {
                res.status(500).json({ error: 'Failed to parse JSON' });
            }
        });

    }).on('error', (err) => {
        res.status(500).json({ error: 'Failed to fetch data' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
