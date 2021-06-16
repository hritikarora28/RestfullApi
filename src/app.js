const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("Your are in root")
})
app.post("/student",(req,res) =>{
    res.send("We are in student");
})

app.listen(port, ()=>{
    console.log(`Your request is send to port ${port}`)
})