require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
});

module.exports = app;