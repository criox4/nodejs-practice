import gfName from "./features.js";
import { gfName1,gfName2 } from "./features.js";
// const gfName=require("./features")
// console.log(http);
// import gfName from "./features";
// const gfName=require("./features")
// console.log(http);
const http = require("http");
console.log(gfName); 

const server = http.createServer((req, res)=>{
    // console.log(req.url);
    // console.log("Servered");
    if (req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }
    else if (req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }
    else if (req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>Page Not Found</h1>")
    }
})


// console.log("Server is working");
server.listen(5000,()=> {
    console.log("Server is working");
});