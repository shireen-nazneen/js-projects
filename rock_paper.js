// thie is the rock pepar game 
// we have to chose the on thing if we and computer will give same answer it mins it draw ,and it is oposite it one of them will be the winner



var readlineSync = require("readline-sync");
var computerMoves = ['rock', 'paper', 'scissors'];
var computer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
var palayername= readlineSync.question("enter your name::::")
console.log ("Hi"+ palayername)
var palayer=readlineSync.question("enter your input rock,peper,sscissors::::::")
if (computer===palayer){
  console.log ("draw",palayer,computer)
}else if (computer==="rock" && palayer==="paper"){
  console.log (computer,palayer," computer win the game");

}else if (computer=== "paper" && palayer==="rock"){
  console.log (computer,palayer,' computer win the game');

}else if (computer==="rock" && palayer==="scissors"){
  console.log(computer,palayer,"computer win game");

}else  if(palayer==="scissors" && computer==="rock"){
  console.log(computer,palayer+"  win the game");

}else if (palayer==="paper" && computer==="rock"){
  console.log(computer,palayer,palayername+" win the game");

}else if (palayer==="scissors" && computer==="paper"){
  console.log(computer,palayer,palayername+"win the game");

}else if(palayer==="rock" && computer==="scissors"){
  console.log(computer,palayer,palayername+"win the game")
  
}else if (computer==="peper" && palayer==="scissors"){
  console.log(palayer,computer,palayer+"   win the  game")
}
else{
  console.log(palayer,computer)
}

