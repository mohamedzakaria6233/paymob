const express=require('express')
const app=express()
const port=process.env.PORT
app.get("/",(req,res)=>{
  console.log("helo")
 res.send("ok")
})
app.post("/",(req,res)=>{
  console.log("res",res)
  res.send("hello")
})
app.listen(port,()=>{
    console.log("server is run ........... ")
    res.send("hello")
})

