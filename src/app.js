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

app.get("/student",async(req,res)=>{
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
        res.send(e)
    }
})

app.get("/student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById({_id});
        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }
        
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.patch("/student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
       const updatestudent = await Student.findByIdAndUpdate(_id,req.body,);
       res.status(200).send(updatestudent)
    } catch (e) {
        res.status(404).send()
    }
})

app.delete("/student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
         const deleteStudent = await Student.findByIdAndDelete({_id})
         if(!_id){
            return res.status(404).send();
         }
         else{
             return res.send(deleteStudent);
         }
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log(`Your request is send to port ${port}`)
})