const express=require('express');
const app=express();
const notes=require('./data/nots');
const dotenv=require('dotenv');
const connectDb=require('./config/db');

const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config();
connectDb();
app.use(express.json());
//api to fetch all the notes
app.get('/api/notes',(req,res)=>{
    res.json(notes);
})


//api to fetch a single note

// app.get('/api/note/:id',(req,res)=>{
//     const id=req.params?.id;
//     const note=notes.find((n)=>n._id===id);
//     res.send(note);
// })

app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is started at the port of ${PORT}`));