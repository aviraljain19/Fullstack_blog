const express = require("express");

const userRoutes = express.Router();

userRoutes.post('/register', (req,res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Registered"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.post('/login', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Login"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.get('/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Details"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.get('/profile/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Profile"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.put('/profile-photo-upload/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Profile Image"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.put('/cover-photo-upload/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Cover Image"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.put('/update-password/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Password Update"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.put('/update/:id', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Update"
        })
    } catch (error) {
        res.json(error)
    }
})

userRoutes.get('/logout', async (req, res)=>{
    try {
        res.json({
            status:'Success',
            user:"User Logout"
        })
    } catch (error) {
        res.json(error)
    }
})

module.exports = userRoutes;