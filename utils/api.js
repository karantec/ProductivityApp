import express from "express";

const apiRoutes=express.Router;

apiRoutes.post('/activity',(req,res)=>{
    res.send("login");
})