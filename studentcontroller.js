const Student = require('../models/Student');

async function addBooks(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('welcome');
        }catch(err){
        console.log(err)
    }
}
module.exports= addBooks;