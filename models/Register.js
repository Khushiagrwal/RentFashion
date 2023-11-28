const mongoose =require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registerSchema =new mongoose.Schema({

    email:{
        type:String,
        required:true,
        trim:true
    }
})

registerSchema.plugin(passportLocalMongoose)
const Register=mongoose.model('Register',registerSchema);
module.exports=Register;