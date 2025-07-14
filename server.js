const express = require('express');
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/node.model");

connectToDB();
const app = express();

app.use(express.json());

app.post('/notes', async (req, res) => {
    const {title, description} = req.body;
    await noteModel.create({
        title, description
    })
    res.json({
        Message : "Title and Description add successful"
    })
})

app.get('/notes', async(req, res) => {
    const allNotes = await noteModel.find();

    res.json({
        Message : "Note fetch successful",
        allNotes
    })
})

app.delete('/notes/:id', async(req, res)=>{
    const noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id : noteId
    })
    res.json({
        Message : "Note Delete Successful."
    })
})

app.patch('/notes/:id', async(req, res)=>{
    const noteId = req.params.id;
    const {title} = req.body;
   await noteModel.findByIdAndUpdate({
        _id : noteId
   }, {
        title : title
   })
    res.json({
        Message : "Note update successful."
    })
})

app.listen(3000, ()=> {
    console.log("Server Start.")
})
