const express=require('express')
const app=express()
const port=process.env.PORT
app.get("/",(req,res)=>{
  console.log("res",res)
})
app.post("/",(req,res)=>{
  console.log("res",res)
})
app.listen(3001,()=>{
    console.log("server is run ........... ")
})

