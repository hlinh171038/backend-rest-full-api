
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./modals/ProductModal')
 

// const db = mongoose.connection
// db.on('error',(error)=> console.error(error))
// db.once('open',())
//middleware ( every you click the route the middleware is running)
 app.use(express.json())
 // middleware for update
 app.use(express.urlencoded({extended:false}))
//in here you click the route it check auth

// ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home')
})  

app.get('/blog',(req,res)=>{
    res.send('we are on blog')
})
// get all product 
app.get('/product',async(req,res) =>{
    try {
        const products =await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//get single product
app.get('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const product= await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//updata product with id
app.put('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
           return res.status(404).json({message:`cant find the product with ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
//delete product with id
app.delete('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id, req.body)
        if(!product){
            return res.status(404).json({message:`cant find the product with ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.post('/product',async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

// HOW TO WE START THE LISTENING  TO THE SERVER
mongoose.connect('mongodb+srv://hoanglinh171038:aG9QhpHtzB3OkDPs@cluster0.xo15b4l.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connect to MongoDb')
    app.listen(6000,()=>{
        console.log('node app api run in localhost:6000')
    }) // 1.app run in localhost:3000
}).catch((error)=>{
    console.log(error)
})