const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port= 8080;
// rocess.env.PORT 



app.use(bodyparser.json())
app.use(cors())

app.get('/',async(req,res)=>{
  res.send("ok")
})
app.post('/',async(req,res)=>{
console.log(res)

})

app.listen(port,()=>{
    console.log("example app ")
})

