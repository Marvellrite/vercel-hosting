require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT;
const envVariable = process.env.Variable;


app.get("/", (req, res)=>{
    const response = `<h1>Hello this is Ozuru Dev Showing how Vercel Hosting is done</h1><br><a href='/about.html'>About Page</a>`;
    res.status(200).send(response);
})
app.get("/about.html", (req, res)=>{
    const response = `<h1>Welcome to the about page</h1>. <br> <h3>The environment Variable is: ${envVariable}</h3> <br><a href='/home.html'>Home page</a>`;
    res.status(200).send(response)
})


app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

