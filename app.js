const express = require("express")
const bodyParser = require("body-parser")
let ejs = require('ejs');


const app = express()

var items = ["Buy Food ", "Eat Food ","Cook Food"];

app.use(bodyParser.urlencoded({extemded:true}));
app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    
    var today =new Date()
    var currentDay = today.getDay()
    var day=""

    
    var options ={
        weekday:"long",
        day:"numeric",
        month:"long",
    }

    var day = today.toLocaleDateString("en-Us",options)
   

    res.render("list",{
        KindofDay:day,newListItems:items
    })
})

app.post("/",function(req,res){
   var item =  req.body.newItem

   items.push(item);
   
   res.redirect("/");
})



app.listen(3000,function(){
    console.log("rodando na porta 3000")
})