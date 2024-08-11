// CRUD Operations 

const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send('Hey');
})
app.get('/create', async (req, res)=>{

   let createdUser = await userModel.create({ 
        name: "Priyanshu",
        email: "priyansh01@gmail.com",
        username: "priyanshupjpt"
    });

    res.send(createdUser);
})

app.get('/read', async (req, res)=>{
    let users = await userModel.find(); //for Find all user
    // let users = await userModel.findOne(); //for Find one user
    // let users = await userModel.findOne({username : "adityapatel"}); //for Find Particular one user
     res.send(users);
 })

app.get('/update', async (req, res)=>{
   let updatedUser = await userModel.findOneAndUpdate({username: "adityapatel"}, {name: "Aditya Mahendra Patel"}, {new: true})
    res.send(updatedUser);
})

app.get('/delete', async (req, res)=>{
    let delUser = await userModel.findOneAndDelete({username: "priyanshupjpt"})
     res.send(delUser);
 })



app.listen(3000);