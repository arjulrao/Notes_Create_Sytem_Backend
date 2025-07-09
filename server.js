const express = require('express');

const app = express();

app.use(express.json());

let all_notes = [];

app.post('/notes', (req, res) => {
    // console.log(req.body)
    all_notes.push(req.body);
    res.json({
        Message : "Title and Description add successful",
        Notes : all_notes
    })
})

app.listen(3000, ()=> {
    console.log("Server Start.")
})

