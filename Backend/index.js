const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const notes=require('./data/nots');
const dotenv=require('dotenv');
const connectDb=require('./config/db');

const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config();
connectDb();
app.use(express.json());
//api to fetch all the notes
// app.get('/api/workouts',(req,res)=>{
//     res.json(notes);
// })


//api to fetch a single note

// app.get('/api/note/:id',(req,res)=>{
//     const id=req.params?.id;
//     const note=notes.find((n)=>n._id===id);
//     res.send(note);
// })



app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);


app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is started at the port of ${PORT}`));