const Workout=require('../models/workoutsModel');
const asynHandler=require('express-async-handler');
// const jwtToken = require('../utils/generateTokes');
const getWorkouts = asynHandler(async (req, res) => {
    const workouts = await Workout.find({ user: req.user._id });
    res.json(workouts);
})
const createWorkout = asynHandler(async (req, res) => {
    const { title, content, url } = req.body;
  
    if (!title || !content || !url) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
      return;
    } else {
    
      const note = new Workout({ user: req.user._id, title, content, url });
  
      const createdNote = await note.save();
  
      res.status(201).json(createdNote);
    }
});
  
const getWorkoutById = asynHandler(async (req, res) => {
    const note = await Workout.findById(req.params.id);
  
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  
    res.json(note);
  });

module.exports={getWorkouts,createWorkout,getWorkoutById};

