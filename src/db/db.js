const mongoose = require('mongoose');


function connectToDB(){
    mongoose.connect("mongodb+srv://arjulrao:TZYZlVOqvt2sIPVg@cluster0.2hoagqd.mongodb.net/").then(()=> {
        console.log("DB is connected.")
    })
}

module.exports = connectToDB;