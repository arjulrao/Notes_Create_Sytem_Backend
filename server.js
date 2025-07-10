const express = require('express');

const app = express();

app.use(express.json());

let all_notes = [];

app.post('/notes', (req, res) => {
    all_notes.push(req.body);
    res.json({
        Message : "Title and Description add successful"
    })
})

app.get('/notes', (req, res) => {
    res.json(all_notes);
})

app.delete('/notes/:index', (req, res)=>{
    const index = req.params.index;
    all_notes.splice(index-1, 1);
    res.json({
        Message : "Note Delete Successful."
    })
})

app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index;
    const {title} = req.body;
    all_notes[index-1].title = title;
    res.json({
        Message : "Note update successful."
    })
})

app.listen(3000, ()=> {
    console.log("Server Start.")
})
