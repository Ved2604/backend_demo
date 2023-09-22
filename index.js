const express=require('express')

const app=express();



app.use("/",(req,res)=>{
    res.json({message:"Hello from my demo app"})
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})