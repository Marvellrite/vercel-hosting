require("dotenv").config();

const express = require("express");

const app = express();

// app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Hello this is Marvel Showing how Vercel Hosting is done</h1><br><a href='/about.html'>About Page</a>")
})
app.get("/about.html", (req, res)=>{
    res.status(200).send("<h1>Welcome to the about page</h1>")
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

module.exports = app;