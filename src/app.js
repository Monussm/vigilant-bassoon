const express=require('express');
const port=process.env.port ||3000
const app=express();
const hbs=require('hbs');
const path=require('path');
const mypath=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(mypath));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
// getting-started.js
const mongoose = require('mongoose');
const { stringify } = require('querystring');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const registrationSchema= new mongoose.Schema({
name: String,
email:String,
mobilenumber:Number,
password:String,
confirmpassword:String,
oldpassword:String,
newpassword:String,
secure:String,
secureanswer:String

});
const Registar = mongoose.model('Registar',registrationSchema);
app.get("/",(req,res)=>{
const params={}
res.render("index")

})
app.get("/forget",(req,res)=>{
res.render("forget")
})
app.post("/forget",(req,res)=>{

const match=Registar.findOne({email})
console.log(match)
const info= new Registar
({ 
oldpassword:req.body.oldpassword,

});



})
app.get("/log",(req,res)=>{

res.render("log")
})
app.post("/",async(req,res)=>{
// const password=req.body.password
// const confirmpassword=req.body.confirmpassword
// if(password==confirmpassword){
const info= new Registar
({ 
name:req.body.name,
email:req.body.email,
mobilenumber:req.body.mobilenumber,
password:req.body.password,
confirmpassword:req.body.confirmpassword,
secure:req.body.secure,
secureanswer:req.body.secureanswer
});
await info.save()
res.status(200)
res.render("log")
// }
// else{
// res.send("Password Not Match")

// }
})
app.listen(port,()=>{


console.log("Running on port 3000")



})

