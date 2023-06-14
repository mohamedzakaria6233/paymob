// console.log("hello world")
// console.log(process.argv)  // [programm,path,args]
// console.log(parseInt(process.argv[2])+65)
// const mod=require("./mod")
// console.log(mod.p)

// ///////////////////////////////////////////
// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.setHeader("Content-Type","text/html")
//     res.write("hello wolrd ")
//     res.statusCode=500
//     console.log(req.url)// الرابظ اللي بعنله الداتا
//     if(req.url=="/"){
//         res.write("welcome")
//         res.write("this is home page ....node")
//         res.write("WWW.stem.com")
//     }
//     console.log(req.method) // get post ....
//     res.end()  //اوعي تنساها\
// }) 
// server.listen(1200,()=>{
//     console.log("ok server is run")
// })
///////////////////////////////////////////////
// const express=require("express")
// const app=express()
// app.use((req,res,next)=>{
//     console.log("hello world !!!")
    // res.write("hello")
    // res.end()
    // res.send("hello world in node js \"MERN STACK\"")    //دي بتساوي res.write() و res.end()
    //ملاحظة كل app.use بتاخد send 
    // res.write("<h1>Hello world</h1>")
    // res.write("<input />")
    // res.end()
    // ملاخظه هامه لما بعمل سييند بياخد مره واحده
//     console.log("use 1 :")
//     if(req.url=="/"){
//         res.send("Welcome from home page !")
//     }
//     if(req.url=="/about"){
//         res.send("Welcome from about page")
//     }
//     else{
//         res.send(`Error 404 Sorry ${req.url} Not Found!!`)
//     }
//     next()
// })
// app.use("/",(req,res)=>{
//     res.send(`welcome from home `)
// })
// app.use("/about",(req,res)=>{
//     res.send(`Welcome from about`)
// })
// app.use((req,res)=>{
//     res.send("Error 404")
// })
// app.use((req,res)=>{
//     console.log("res number 2")
//     // res.send("<input placehoder='enter your email'/> ")
// })

//ملاحظة app.use() بتطابق اول حرف بس مع الراب
// app.all() لازم يطابق المسار كله 
// app.all("/",(req,res)=>{
// res.send(`welcome from home `)
// })
// app.all("/about",(req,res)=>{
//     res.send(`Welcome from about`)
// })
// app.use((req,res)=>{
//     res.send("Error 404")
// })

// app.listen(3500,()=>{
//     console.log('server is run at port 3500')
// })

const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("hello world ")
})
app.listen(1005,()=>{
    console.log("server is run ........... ")
})
