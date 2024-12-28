const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }       
})

// to create custom methods (like User.find() we create User.customFunc())
userSchema.statics.signup = async function (email, password){
    if(!email || !password){
        throw Error('All fields must be filled') 
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    // here we wanna do User.find() etc. , but still the User hasnt been created yet, so we do "this.find"
    // this should be used only with "function" kywd function , NOT ARROW FUNCTIONS
    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email already in use')
    }
    
    const salt = await bcrypt.genSalt(10); // salt is just a suffix added to userpassword before hashing - for extra layer pf security .. salt of len 10
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password: hash});
    return user;      
}

// login user
userSchema.statics.login = async function (email,password){
    if(!email || !password){
        throw Error('All fields must be filled') 
    }
    const user = await this.findOne({ email });
    if(!user){
        throw Error("Incorrect email")
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched){
        throw Error("Incorrect password")
    }
    return user
}

module.exports = mongoose.model('User', userSchema)