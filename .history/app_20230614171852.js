const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 8080;



app.use(bodyparser.json())
app.use(cors())

app.get('/',async(req,res)=>{
  res.write("ok")
})
app.post('/',async(req,res)=>{

      
})

app.listen(port,()=>{
    console.log("example app ")
})

