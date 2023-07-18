import express from 'express';
import path from 'path';

const app = express(); 
// app.get("/", (req,res)=>{
//     // const file = path.resolve("./index.html");
//     // // const file = fs.readFileSync("./index.html");
//     // res.sendFile(file); 

//     const pathlocataion=path.resolve();
//     res.render
//     res.sendFile(path.join(pathlocataion,"./index.html"));
//     // res.send("Hi");
//     // res.sendStatus(500)
//     // res.json({
//     //     success: true, 
//     //     products:[],
//     // })
//     // res.status(400).send("Meri Marzi")

//     // res.sendFile("./index.html");
// });

// express.static(path.join(path.resolve(),"./public"));
app.use(express.static(path.join(path.resolve(),"./public")));
app.set("view engine", "ejs"); 

app.get("/", (req,res)=>{
    res.render("index",{name:"Ashutosh"});
});


app.listen(5000,()=>{
    console.log("Server Working");
});