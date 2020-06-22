
const P=require('../models/schema');        // requiring model to populate the data
module.exports.add=function(req,res){
     P.create(req.body,function(err,data){          //creating object using req.body
     if(err)
     {console.log(err); return;}
    return res.redirect('back');                  // redirecting to the page after creating the object
 });
}