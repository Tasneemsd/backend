// we  perform crud operations  using express framework

const express = require('express');
const app = express();
const port = 3300;

// Enable JSON body parsing middleware

app.use(express.json());
const logger = (req,res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);

// This is the array consisting of objects

let students = [
    { id: 1, name: "Banu", course: "CSE" },
    { id: 2, name: "Hassu", course: "TET" }
];7

//This is the default page which consists of  a heading tag

app.get("/", (req, res) => {
    res.send(`Welcome to Student Management`);
});

//This is for displaying students data (using get() method)

app.get("/students", (req, res) => {
    res.json(students);     //in json format
});

// This is for displaying a particular person details using id using get() method

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    student
        ? res.json(student)
        : res.status(404).send("Student not found in records");
});

//This is for posting or inserting data into array of objects using post() method

app.post("/students", (req, res) => {
    const { name, course } = req.body;
    const newStudent = {
        id: students.length + 1,
        name,
        course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);

})

// This is for updating data in array of objects using id particulary through put() method.

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, course } = req.body;
    const student = students.find(s => s.id === id);

    if (student) {
        student.name = name || student.name;
        student.course = course || student.course;
        res.json(student);
    } else {
        res.status(404).send("Student data not found");
    }
});

// This is used for deleting data in an array of objects using particular id through delete() method

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const deleted = students.splice(index, 1);
        res.json(deleted[0]);

    } else {
        res.status(404).send("deleted succesfully");
    }
})
app.get('/search',(req,res)=>{
    const {course} = req.query;
    const result = students.filter(s => s.course === course)
    res.json(result);
})


// listen() method for passing port so that can access in browser through localhost://

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
