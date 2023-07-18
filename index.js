import express from 'express';
import path from 'path';

const app = express(); 

app.use(express.static(path.join(path.resolve(),"./public")));
app.set("view engine", "ejs"); 

app.get("/", (req,res)=>{
    res.render("index.ejs",{name:"Ashutosh"});
    // res.sendFile("index")
});


app.listen(5000,()=>{
    console.log("Server Working");
});