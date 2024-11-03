const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({ 
    // basic schema for all workout 'documents'
    title:{
        type: String,
        required: true
    },
    reps:{ // No. of repitions of wokrout
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Workout", workoutSchema);


