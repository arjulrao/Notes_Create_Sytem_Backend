require('dotenv').config()
const mongoose = require('mongoose');


function connectToDB(){
    // mongoose.connect(process.env.DB_URL).then(()=> {
    //     console.log("DB is connected.")
    // })
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2hoagqd.mongodb.net/note_backend`).then(()=> {
        console.log("DB is connected.")
    })
}
 
module.exports = connectToDB;