const express = require('express');
const app = express();
const port = 3300;

//enable json body parser
//middleware can be used through use keyword

app.use(express.json());

let students = [
    { id: 1, name: "Banu", course: "Cse"},
    { id: 2, name: "hassu", course: "TET"}
]
app.get("/", (req,res) =>{
    res.send(`<h1> Welcome to student management </h1>`);
})
app.get("/students",(req,res)=>{
    res.json(students);

})
app.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    student ? res.json(student): res.status(404).send("student not found in records");
})
app.listen(port, ()=>{
    console.log("running")
})
