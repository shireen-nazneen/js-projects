// PART 1 OF IF ELSE:


// if raining is there we need to print "I will not go to the park" else "I will go to the park"

var condition = 'Raining';
if(condition == 'Raining') {
   	console.log('I will not go to the park');
}
      
else {
   	console.log('I will go to the park')

}
// comparing tow veraible value in if else
var a = 10;
var b = 12;
if(b > a){
  console.log( b," is greater than ", a  );
}

// display the big number btween 2 numbers

var num1=7;
var num2=7;
if (num1>num2){
    console.log("num1 is greater than num2");
}else{
    console.log("num2 is greater than num1");
}

// ELSE IF EXAMPLE : 

var course = "English";
if (course == "English"){
  console.log("Tutorial is for English")}
else if (course == "Hindi"){
  console.log("Tutorial is for Hindi")}
else {
  console.log("Tutorial is for Javascript")
}

// what is out put
var day = "TUeSday".toLowerCase();
if (day == "monday") {
  console.log("Dhanwantari\nSiddhi\Kritika\Salon\nMayuri\Gauri");
}
else if (day == "tuesday") {
  console.log("Keemaya\nRoshni\nPooja\Priyanka\nnalini\nManisha");
}
else if (day == "wednesday") {
  console.log("Shrusti\Karuna\Parveen\Sandhya\nLeena\Karishma");
}
else if (day == "thursday") {
  console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\Mehzebin");
}
else if (day == "friday") {
  console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
}
else if (day == "saturday") {
  console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
}
else if (day == "sunday") {
  console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
}
else {
  console.log("Please enter valid week davar x = 10")
var y = 12
var z = 90
var m;
var x=2;
if (x > y) {
  if (x < z){
      x = y
      console.log(x)
  }
  else{
      m = z
      console.log(m);
  }
}
else {
  if(y > z){
      m = y
      console.log(m)
  }
  else {
      m = x
      console.log(m)
  }
}


var readlinesync = require("readline-sync");
var num1= readlinesync.question("enter num");
var num2= 300 - 123 ;

if (num1>num2){
  console.log("num1 is greterthan num2");
}else if(num1<num2){
  console.log("num2 in gretertahn num1");
}
var readlinesync = require("readline-sync");
var num1= readlinesync.question("enter num");
var number = 44 * 30 ;
if (num1>number){
  console.log("num1 is geretarthan number");
}
else if (num1<number) {
  console.log("number is geretartan num1");
}
else{
  console.log("both are same");
}

var readlinesync = require("readline-sync");
var num1= readlinesync.questionInt("how much litter water is there");
if (num1>1 && num1<=1){
  console.log("fill  water");
}
else if (num1>1 && num1<10){
  console.log("no need to fill water");
}
else{
  console.log("over flow");
}
var readlinesync = require("readline-sync");
var num1= readlinesync.question("enter number");
var numint=parseInt(num1);
if (numint%2===0){
  console.log("divisible");
}else{
  console.log("not divisible");
}
var readlinesync = require("readline-sync");
var num1= readlinesync.questionInt("enter  first number");
var num2=readlinesync.questionInt("enter second number");
if (num1%num1==0){
  console.log("num1 is divisible by num2");
}else {
  console.log("not divisible ");
}
var readlinesync = require("readline-sync");
var num1= readlinesync.questionInt("number");
if (num1%5==0 && num1%15==0){
  console.log("divisible ");
}else{
  console.log("not divisible");
}

var readlinesync = require("readline-sync");
var age= readlinesync.questionInt("number");
if (age>5 && age<18){
  console.log("you can go to school");
}else if (age>=18 && age<21){
  console.log("you can give vote");
}else if(age>=21 && age<24){
  console.log("you can  dirive car");
}else if(age>=24){
  console.log("you can drink");
}

var year = 2016;
var name = "NavGurukul";
console.log(name + ', ' + "mein start hua tha!");

var readlinesync = require("readline-sync");
var price= readlinesync.questionInt("1l milk ka price daalo?:");
console.log("10L milk"+price*10+"rupees ka aata hai.")

var readlinesync = require("readline-sync");
var num= readlinesync.questionFloat("enter number");
if (num%2==0){
  console.log("your num is divided by 2"); 
}

// Tumhare paas 5 mangoes hai

var mangoes=5
// Kisi ne humhe 5 aur mangoes de diye
// manGoes=mangoes + 5
// Ab tumne unn mangoes ko 5 logo mei baant diya
// console.log(manGoes)
//  Par isse toh 1 mango hi mila. Par milne 2 chahiye the. Code ko sahi karo jisse ki sabko sahi mangoes mile. 






// # Aapke paas ek variable mein `raw_input` se gaadi ki speed ka ek integer haivar
var readlinesync = require("readline-sync");
var speed= readlinesync.questionInt("aadi ki speed daalo > ");

//  Ab aapne speed check kar ke kuch print karna hai:
//  Agar 60 se kam hai toh print karna: "Speed kam hai"
//  Agar 30 se kam hai toh print karna: "Speed bahot kam hai"
//  Agar 100 se zyada hai toh print karo: "Bahot zyada hai"
if (speed <30){
  console.log("Speed bht kam  hai");
}
else if (speed<60){
  console.log("speed kam hi");
}else if (speed>100){
  console.log("speed bht ziyada hi ");
}
// Isme ek baar speed 20 daal ke dekho aur dekho ki "Speed bahot kam" hai ki
// output aati hai ya nahi. Agar nahi aati toh isko theek karo aur yeh socho
//  ki kya problemn hai. 

var readlinesync = require("readline-sync");
var time=readlinesync.question("Kaunse samay ka khana banana hai? (lunch/dinner) >");
var day=readlinesync.question('enter day')
time.toLowerCase()
day.toLowerCase()
if (day=="monday" || time=="tuesday"){
    console.log("Daal-Roti banegi aaj");
}else if (day=="tuesday" && time=="dinner"){
  console.log("Pav-Bhaji banegi aaj toh ");
}




var isTrue = "False";
if(isTrue){
  console.log("Output should show")
}
else if(isTrue === "False"){
  console.log("Both are same");
}
else {
  console.log("Please run it. if all conditions false");
}
var number = 12;
if(number%3===0){
   console.log("choco")
  }
else if(number % 7){
     console.log("late")
  }
else if(number%3==0 && number%7==0) {
     console.log("Chocolate")
}else{
     console.log("Not divisible by 3 , 7")
}}

