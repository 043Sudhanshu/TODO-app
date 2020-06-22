
const P=require('../models/schema');            //requiring model schema to delete data
module.exports.delete=function(req,res){
   
    var arr=req.body.id;      //storing the id of deleting checkboxes

    if(arr==null){                       // if the coming request is  null
      return  res.redirect('back');
    }
    
    if(typeof(arr)==="string"){                   //if coming id is only one which means it will not come in the form of array
    P.findByIdAndDelete(arr,function(err){          //it will come as string so we are storing that string and deleting the                           
            if(err){console.log('err'); return;}       //object will that particular id in the database
            return;
        });
}
    else {                                             // else the coming id's are more than one they will come in te form of array
    for(let i of arr){                     // so we will iterate over that and will delete the id which are presented in
        P.findByIdAndDelete(i,function(err){       //the array 
            if(err){console.log('err'); return;}
            return;
        });
    }
}
    
    return res.redirect('back');                    //after deleting the id's we will redirect to the same page 
}