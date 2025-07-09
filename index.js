import express from "express";
import { router } from "./routes/job.routes.js";
import mongoose from 'mongoose';

const port = process.env.PORT;
const app = express();

mongoose.connect(process.env.DB_URL) 
  .then(() => console.log('Connected!'));
  
app.use(express.json());

app.use("/api/v1/job" , router)

app.listen(port , ()=>{
  console.log(`server is running at ${port}`);
})