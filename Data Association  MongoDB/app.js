const express = require('express');
const app = express();
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get('/', function (err, res){
    res.send("Hey !");
})
app.get('/create', async function (err, res){
    let user = await userModel.create({
        username: "aditya",
        age: 25,
        email: "aditya@gmail.com"
    })

    res.send(user);
})

app.get('/post/create', async function (req, res){
    let post = await postModel.create({
        postdata: "hello guys",
        user: "66bdc2af4cbf5fd523f40783"
    })

    let user = await userModel.findOne({_id: "66bdc2af4cbf5fd523f40783"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);