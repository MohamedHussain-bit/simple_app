import mongoose from "mongoose";
import validator from 'validator'

const userSchema = new mongoose.Schema({
    fristName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : [ validator.isEmail , 'filed must be avalied email address']
    },
    password : {
        type : String,
        required : true,
    }
})

export default mongoose.model('user' , userSchema)
