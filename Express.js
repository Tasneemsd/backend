const express = require('express');
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("This is created using express.js")
});
app.get('/hello', (req,res)=>{
    res.send("Is this a second page? any doubt? This is!")
});
app.get('/info',(req,res)=>{
    console.log("Method",req.method);
    console.log("Request url",req.url);
    res.send("Check your terminal for request info")

});
app.get('/identify',(req,res) => {

    const name = req.query.name;
    res.send(`Hello ${name || 'Unknown'}!`);

});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})