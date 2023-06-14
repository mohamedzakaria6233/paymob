const express=require('express')
const app=express()
const port=3300
app.get("/",(req,res)=>{
  
 res.send(req.query)

})
app.post("/",(req,res)=>{
res.send(res)
  
})
app.listen(port,()=>{
    console.log("server is run ........... ")
})

