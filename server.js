
const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
// middleware ( every you click the route the middleware is running)
// app.use('/post',()=>{
//     console.log("this is middleware running");
// })
// in here you click the route it check auth

// ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home')
})  

app.get('/post',(req,res)=>{
    res.send('we are on posts')
})


// HOW TO WE START THE LISTENING  TO THE SERVER
app.listen(3000) // 1.app run in localhost:3000