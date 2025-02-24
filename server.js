const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;

app.use(express.json());
app.get("/", (req, res)=>{
  res.json({message: "server is running"});
})

// mongoose 
//   .connect("dburi");
//   .then("the database is connected")
//   .catch("error in connicting db")

const user = mongoose.model;

const use = new mongoose.Schema({
  email:{type:String, required:true},
  password:{type:String, required: true, new:true},
})

app.put("/user/email", async(req, res)=>{
  try{
    const email = new use(req.body);
    if(!email){
      res.status(404)
      return res.json({error:"mail not found."})
    }
    else if(!password){
      res.json({message:"password is must "})
    }

  }catch{
    res.json({error:"error in finding email"})
  }
})

app.delete("/user/email", async(req, res)=>{
  try{
    const email = new use(req.params.delete());
    res.json({message:"User deleted successfully"})
    if(!email){
      res.status(404)
      return res.json({error:"request not found"})
    }
   
  }catch(err){
    res.json({error: "Email not found"})
  }
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})