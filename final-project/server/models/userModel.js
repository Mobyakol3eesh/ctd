const mongose = require('mongoose');

const taskSchema = new mongose.Schema({
    taskName : {
        type : String,
        required : true,
        min : 0,
    },
    date : {
        type : String,
        required : true,
    },
    isFulfiled : {
        type : Boolean,
        required : true,
    }
});

const userSchema = new mongose.Schema({
    name : {
        type : String,
        required : [true ,"Name is required"],
        min: 0,     
    },
    email : {
        type : String,
        required : [true ,"Email is required"],
        unique : [true, "Email already exists"],
        min : 0,
    },
    password : {
        type : String,
        required : true,
        min : 0,
    },
    tasks : {
        type : [taskSchema],
        required : false,
        default : [],
    }
});

module.exports = mongose.model('User', userSchema);