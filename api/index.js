import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();




mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected to mongodb')
}).catch((err) =>{

  console.log(err)
});

// mongoose.connect("mongodb+srv://jbarun70:jbajbajba@mernnew-v.l7ffb31.mongodb.net/mern-estatee?retryWrites=true&w=majority")


const app=express();
app.listen(3001,()=>{
  console.log('server is running on port 3000!!')
})
