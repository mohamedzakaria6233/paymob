const express=require('express')
const app=express()
const port=process.env.PORT
const bodyparser=require('body-parser')
const cors=require('cors')
// app.get("/",(req,res)=>{
  
//  res.send(req.query)

// })
/* eslint-disable */
const {initializeApp}=require('firebase/app')
const {getFirestore}=require('firebase/firestore')
const {getAuth}=require('firebase/auth')
const {getStorage}=require('firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyCZwxZYYmwux5W60lL5C9Ifz-9uHfAD860",
    authDomain: "test-36212.firebaseapp.com",
    projectId: "test-36212",
    storageBucket: "test-36212.appspot.com",
    messagingSenderId: "738249892761",
    appId: "1:738249892761:web:a6be481e68090207e7a908"
};
  
const app1 = initializeApp(firebaseConfig);
const auth=getAuth(app1)
const db=getFirestore(app1)
const storage=getStorage(app1)
const {addDoc,collection} =require("firebase/firestore")
 

app.use(bodyparser.json())
app.use(cors())
console.log("hello")

app.get("/",(req,res)=>{
  res.send(req.query)
})
app.post("/",(req,res)=>{
  const pay=collection(db,"paymob")
  addDoc(pay,{ak:JSON.stringify(req.body)})

  
})
app.listen(port,()=>{
    console.log("server is run ........... ")
})

