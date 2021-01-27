const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    mail:{
        type:String,
       // registered:true,
        //unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type: String,
       // required:true
    },
    gender:String,
    aadhar : Number,
    license : String,
    phoneno:Number,    
    securityqun:{
        type: Number,
        //required:true
    },
    securityans:{
        type: String,
        //required:true
    }

    
});
module.exports=mongoose.model('User',userSchema);