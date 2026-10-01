const mongoose = require("mongoose")

const userSche = new mongoose.userSchema({
    name: {
        type: String,
        required: True
    }, 
    
    age:{ Number,
        required: True
    }
    
})
module.exports = mongoose.module9("User" , userSchema)