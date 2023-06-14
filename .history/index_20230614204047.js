const express=require('express')
const app=express()
const port=3300
app.get("/",(req,res)=>{
  
 res.send(res)

})
// app.post("/",(req,res)=>{
//   console.log("res",res)
  
// })
app.listen(port,()=>{
    console.log("server is run ........... ")
})

