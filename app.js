require("dotenv").config();

const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.status(200).send(`<h1>Hello this is Ozuru Dev Showing how Vercel Hosting is done</h1><br><a href='/about.html'>About Page</a>`);
})
app.get("/about.html", (req, res)=>{
    res.status(200).send(`<h1>Welcome to the about page</h1>. <br> <h3>The environment Variable is: ${envVariable}</h3> <br><a href='/home.html'>Home page</a>`)
})


app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

