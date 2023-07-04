const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vhkofez.mongodb.net/habit-tracker?retryWrites=true&w=majority`;

mongoose.connect(DB).then(()=>{
    console.log('Connection successfull!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;