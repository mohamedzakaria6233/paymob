const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const port=process.env.PORT;
const OpenAI=require('openai')
const { Configuration, OpenAIApi } =OpenAI;
const openai=new OpenAIApi(new Configuration({
    apiKey:process.env.SECRET
}))


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

