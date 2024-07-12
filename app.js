require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    const response = `<h1>Hello this is Ozuru Dev Showing how Vercel Hosting is done</h1><br><a href='/about.html'>About Page</a>`;
    res.status(200).send(response);
})
app.get("/about.html", (req, res)=>{
    res.status(200).send("<h1>Welcome to the about page</h1>")
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

