const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static('public')); // as we are using express.static() and passing folder name we dont need to write separate routing code

let students = [
    { id: 1, name: "Banu", course: "CSE" },
    { id: 2, name: "Hassu", course: "TET" }
];


app.post('/submit',(req,res)=>{
    res.send(`Received: ${req.body.name}`);
   
})
app.listen(port, ()=>{
    console.log(`response: ${port}`)
    
})