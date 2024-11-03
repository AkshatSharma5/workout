const { mongoose } = require("mongoose")
const Workout = require("../models/workoutModel")

// get all wokrouts
const getWorkouts = async(req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}



// get a single wokrout
const getWorkout = async(req,res) => {
    const {id} = req.params; //gets ":/id"
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({eRRoR404: "Error 404! ID is invalid"})
    }
    const workout = await Workout.findById(id)
    if(!workout) {
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout);
}



// create a new workout
const createWorkout = async(req,res)=>{
    const {title, load, reps} = req.body; // data to be sent
    try{
        const workout = await Workout.create({title, load, reps}) 
        //enters a new row(document) in our collection(table)
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}



// delete a wokrout
const deleteWorkout = async(req,res) => {
    const {id} = req.params; // gets "/:id" in URL

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"ID is invalid"})
    }

    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout)

}



// update a wokrout
const updateWorkout = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
    //this will upd the doc(row) with an _id of 'id' and will update all parameters {title,reps,load} with the given new params, which are destructed using ...req.body
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
}
