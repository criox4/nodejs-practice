// import gfName, { gfName1, gfName2 } from "./features.js";
// import * as myObj from "./features.js";
import http from "http";
import path from 'path';

// console.log(gfName);
// console.log(gfName1);
// console.log(gfName2);

// console.log(myObj);

console.log(path.extname("./index.html"))

import { generateLovePercent } from "./features.js";
console.log(generateLovePercent());

import fs from "fs";
const contact = fs.readFileSync("./index.html",()=>{
    console.log("File Read")
})


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1>Love Percentage is ${generateLovePercent()}</h1>`);
    } else if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    } else if (req.url === "/contact") {
        // res.end("<h1>Contact Page</h1>");
        // res.end(contact)
        // fs.readFile("./index.html",(err,contact)=>{
        //     console.log("File Read")
        //     res.end(contact)
        // })
        res.end(contact)
        
    } else {
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(5000, () => {
    console.log("Server is working");
});
