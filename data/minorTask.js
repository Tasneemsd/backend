const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());


app.use('/static', express.static('task'));



const data = require('./task/studio.json')



/* app.get('/data', (req, res) => {
  res.json(data);
}); */

/* app.get('/data/:id',(req,res)=>{
     const id = parseInt(req.params.id);
    const studio = data.find(s => s.id === id);
    if(studio){
        res.json(studio);
    }
   
        else {
            res.status(404).send("data not found");
        }
}); */

app.get('/data/:id/title', (req, res) => { 
    const id = parseInt(req.params.id);
    const studio = data.find(s => s.id === id);
    if (studio) {
        res.json(studio);
    } else  {
        res.status(404).send("data not found");
    }
});


app.listen(port, () => {
  console.log(`Successfully Running  ${port}`);
})
