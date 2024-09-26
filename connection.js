const mongoose=require('mongoose');
async function connection() {
    try{
        await mongoose.connect('mongodb://localhost:27027/batch-2-26-sep');
        console.log('connection created.....');
        console.log();
    }
    catch(err){
        console.log(err);
    }
}   
module.exports=connection 
