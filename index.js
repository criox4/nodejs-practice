import express from 'express';
import path from 'path';

const app = express(); 
app.get("/", (req,res,next)=>{
    const file = path.resolve("./index.html");
    // res.send("Hi");
    // res.sendStatus(500)
    // res.json({
    //     success: true, 
    //     products:[],
    // })
    res.status(400).send("Meri Marzi")
});
app.listen(5000,()=>{
    console.log("Server Working");
});