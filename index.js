import gfName, { gfName1, gfName2 } from "./features.js";
import * as myObj from "./features.js";
import http from "http";

// console.log(gfName);
// console.log(gfName1);
// console.log(gfName2);

console.log(myObj);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    } else if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1>");
    } else {
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(5000, () => {
    console.log("Server is working");
});
