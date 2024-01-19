require("dotenv").config();
const express = require("express");
require("./config/dbConnect");

const app = express();

app.post('/api/v1/users/register', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Registered"
        })
    } catch (error) {
        res.json(error)
    }
})

app.post('/api/v1/users/login', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Login"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/users/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Details"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/users/profile/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Profile"
        })
    } catch (error) {
        res.json(error)
    }
})

app.put('/api/v1/users/profile-photo-upload/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Profile Image"
        })
    } catch (error) {
        res.json(error)
    }
})

app.put('/api/v1/users/cover-photo-upload/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Cover Image"
        })
    } catch (error) {
        res.json(error)
    }
})

app.put('/api/v1/users/update-password/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Password Update"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/users/logout', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Logout"
        })
    } catch (error) {
        res.json(error)
    }
})


app.post('/api/v1/posts', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Post created"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/posts', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Post Fetched"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/posts/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Post Details"
        })
    } catch (error) {
        res.json(error)
    }
})

app.delete('/api/v1/posts/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Post Deleted"
        })
    } catch (error) {
        res.json(error)
    }
})

app.put('/api/v1/posts/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Post Updated"
        })
    } catch (error) {
        res.json(error)
    }
})


app.post('/api/v1/comments', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Comments created"
        })
    } catch (error) {
        res.json(error)
    }
})

app.get('/api/v1/comments/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Comment Details"
        })
    } catch (error) {
        res.json(error)
    }
})

app.delete('/api/v1/comments/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Comment Deleted"
        })
    } catch (error) {
        res.json(error)
    }
})

app.put('/api/v1/comments/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"Comment Updated"
        })
    } catch (error) {
        res.json(error)
    }
})

//server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("Server is running on port " + PORT));
