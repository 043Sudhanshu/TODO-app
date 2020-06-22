const mongoose=require('mongoose');       //requiring mongoose

const formschema = new mongoose.Schema({            //creating schema of the object i.e structure

      description:{
          type:String,                              // specifying there types and requiring them as essential
          required:true
      },
      category:{
          type:String,
          required:true
      },
      duedate:{
        type: Date,
        required:true
    }
 

    });

const Re=mongoose.model('Re',formschema);        //naming the model in database and passing the schema as a model

module.exports=Re;          //exporting the schema created