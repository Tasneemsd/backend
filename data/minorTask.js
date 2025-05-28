const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use('/static', express.static('task'));

const data = require('./task/studio.json').products; 

app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studio = data.find(s => s.id === id);
  if (studio) {
    res.json(studio);
  } else {
    res.status(404).send("data not found");
  }
});
app.post('/insert', (req, res) => {
  const { title, category, rating } = req.body;

const newProduct = {
  id: data.length + 1,  
  title,
  category,
  rating,
};

  data.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/putIt/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title, category } = req.body;
    const similar = data.find(s => s.id === id);

    if (similar) {
        similar.title = title || similar.title;
        similar.category = category || similar.category;

        
        res.json(similar);
    } else {
        res.status(404).send("Student data not found");
    }
});

app.delete('/clear/:id', (req,res)=>{
     const id = parseInt(req.params.id);
     const remove = data.findIndex(s => s.id === id);
      if (remove !== -1) {
        const deleted = data.splice(remove, 1);
        res.json(deleted[0]).send('deleted successfully');

    } else {
        res.status(404).send(" can't delete");
    }

})

app.listen(port, () => {
  console.log(`Successfully Running  ${port}`);
});
