//require mongoose library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/database');

//making connection to check if it is working or not
const db=mongoose.connection;

//error
db.on('error',console.log.bind(console,'error connnecting to db'));

//once db runs
db.once('open',function(){
    console.log('successfully connected to database');
});