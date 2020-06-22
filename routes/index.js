const express=require("express");      /***** requiring express *****/

const routes=express.Router();       /***  calling router function in express  ****/

const homecontroller=require('../controllers/home');            //requiring the controller for home page
const createcontroller=require('../controllers/create_task');     //requiring the controller for adding data to form
const deletecontroller=require('../controllers/delete_task');       //requiring the controller for deleting data from the form


routes.get('/',homecontroller.home);           // if we get '/' this as a request then this request will be handeled by home in homecontroller

routes.post('/formdata',createcontroller.add);     // if we get '/formdata' this as a request then this request will be handeled by add in createcontroller

routes.post('/deletedata',deletecontroller.delete);      // if we get '/deletedata' this as a request then this request will be handeled by delete in deletecontroller


module.exports=routes;    // exporting routes