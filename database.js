const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://karanrana3095:VAfKBqrFWZwMG9Al@productivity.scheo4o.mongodb.net/?retryWrites=true&w=majority/').then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log('error');
})

const Schema=new mongoose.Schema({


    Name:{
        type:String,
        required:true,

    },
     prod:{
        type:String,
        required:true
    }
})
const User=mongoose.model("User",Schema);
module.exports=User;