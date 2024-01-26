const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(5000, ()=>{
    console.log("Listening at port 5000");
});

module.exports = app;