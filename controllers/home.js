
const P=require('../models/schema');           // fetching the objects from database
module.exports.home=function(req,res){
    P.find({},function(err,founddata){              // finding all the data and it will be stored in found data which we
        if(err)                                     // will pass to the ejs file to render
        {console.log('error in fetching database'); return;}
        return res.render('todoapppage',{
            title:"Todo app",                             
            Alldata:founddata
        });
});
}