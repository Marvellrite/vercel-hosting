require("dotenv").config();

const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res)=>{
    res.status(200).send(`<h1>Hello this is ${process.env.CHANNEL} Showing how Vercel Hosting is done</h1><br><a href='/about.html'>Go to About Page</a>`);
})
app.get("/about.html", (req, res)=>{
    res.status(200).send(`<h1>Welcome to the about page</h1>. <br> <br><a href='/'>Go to Home page</a>`)
})


app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

