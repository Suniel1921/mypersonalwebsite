const mongoose = require ('mongoose');
const validator = require ('validator');
// const routes = require('../routes/main'); 


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 3
    },
    phone : {
        type : Number,
        require : true,
        min : 10
    },
    
    address : {
        type : String,
        required : true,

    },

    message : {
        type : String,
        required : true,
        minLength : 3
    },

    email : {
        type : String,
        required : true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email Id");
            }
        },

    }
})

//we need a collections
const Users = mongoose.model("userData", userSchema);
module.exports = Users;