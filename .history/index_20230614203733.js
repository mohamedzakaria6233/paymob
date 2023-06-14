const express=require('express')
const app=express()
const port=3300
app.get("/",(req,res)=>{
  console.log("helo")
 res.send()
})
app.post("/",(req,res)=>{
  console.log("res",res)
  res.send(res)
})
app.listen(port,()=>{
    console.log("server is run ........... ")
    res.send("hello")
})

