const express = require('express');
const studentcontroller = require('../controllers/studentcontroller');
const router = express.Router();
router.use(express.urlencoded({extended: false}));
router.get('/',(req,res)=>{
    res.render('loginpage')
})
router.get('/welcome',(req,res)=>{
    res.render('welcome')
})
router.post('/add/student',(req,res)=>{
    studentcontroller.addBooks(req,res)
})
module.exports = router
