const express=require('express')
const app=express()
const port=process.env.PORT
app.get("/",(req,res)=>{
    res.send("hello world ")
})
app.listen(3001,()=>{
    console.log("server is run ........... ")
})

