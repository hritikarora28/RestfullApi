const express = require('express');
require("./db/conn")
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//Create a new student
app.post("/student",(req,res) =>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e)
    })
    
})

app.listen(port, ()=>{
    console.log(`Your request is send to port ${port}`)
})