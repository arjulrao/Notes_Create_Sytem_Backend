const mongoose = require('mongoose');


function connectToDB(){
    mongoose.connect("mongodb+srv://arjulrao:5ojWywOgVl58ZkGH@cluster0.2hoagqd.mongodb.net/node_backend").then(()=> {
        console.log("DB is connected.")
    })
}

module.exports = connectToDB;