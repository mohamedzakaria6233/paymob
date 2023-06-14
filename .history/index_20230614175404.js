const express=require('express')
// const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3400

app.use(bodyparser.json())
app.use(cors())

app.get('/',async(req,res)=>{
  console.log("get",res)
})
app.post('/',async(req,res)=>{
console.log("post",res)

})

app.listen(port,()=>{
    console.log("example app ")
})

