const express=require("express");


//body-parser is used to extract the values of an incoming request stream.
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extented:true}));


//to create routes 
//by using request and response function
app.get("/",function(req,res){
	res.send("hello world");
})
app.get("/about",function(req,res){
	res.send("hello my name is akshit negi");
})
app.get("/contact",function(req,res){
	res.send("contact us at akshitnegi");
})



//send file is used send a file as response
app.get("/calculator",function(req,res){
	// console.log(__dirname);
	res.sendfile("calculator.html");
})

app.get("/bmi",function(req,res){
	res.sendfile("bmi.html");
})


//post is used to send data as response 
app.post("/calculator",function(req,res){
	console.log(req.body);

	let a=Number(req.body.v1);
	let b=Number(req.body.v2);
	let sum = a+b;

	res.send("the sum of two numbers is : "+sum);
})

app.post("/bmi",function(req,res){

	console.log(req.body);
	let r1=Number(req.body.n1);
	let r2=Number(req.body.n2);
	let sum=r1/r2*2;

	res.send("your bmi is : "+sum);
})


//to create server on our port
app.listen(4000,function(req,res){
	console.log("home page 100");
});