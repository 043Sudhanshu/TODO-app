const express=require('express');           /****   requiring express  *****/
                      /********** setting express server ***********/
const port=8000;                           /******port number on which server is listening******/

const db=require('./config/mongoose');       /******* requiring mongoose setup ********/
const P=require('./models/schema');          /*****requiring schema*******/

const app=express();                          /***firing express server*******/
app.use(express.urlencoded());                /** parser to parse the form data***/


  
app.use(express.static('./assets'));       /***app is using assets folder for static files****/

app.set('view engine','ejs');           /*******ejs is view engine *********/
app.set('views','./viewer');              /******* viewer folder contains all ejs files which can we viewed from there  ******/



app.use('/',require('./routes'));                /******require route folder,where the requests will go*******/


app.listen(port,function(err){                          /******server listening *********/
    if(err){
        console.log(`Error is coming: ${err}`);
        return;
    }
    console.log(`server is running at port:${port}`);
    return;
});

