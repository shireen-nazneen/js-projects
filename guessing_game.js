// this is the guessing game .
//  we need to guess the number wich  computer choose randomly.
//  its contane 3 level hard meduam easy.
var MyNumber=Math.floor(Math.random() * 10)+1;
console.log(MyNumber)
var Input=require("readline-sync");
var name=Input.question("enter your name")
var userInput=Input.questionInt("hi "+name+"     choss a level wich you want enter 1 for  easy enter 2 for meduam enter 3 for hard ");
if (userInput===1){
    var i=6;
    console.log(name,"your chanses is    "+i+"   for guess the number");
    while(i>0){
        guess = Input.questionInt(name+"    enter number wich you guess");
        if (guess === MyNumber){
            console.log(name+"     wow your guess is right ");
            break
        }else if(guess<MyNumber){
            i--
            console.log(name+"    your guess is to small your chanses is","("+i+")");
        }else if (guess>=MyNumber){
            i--
            console.log(name+"  your guess to higher your  chanses is ","("+i+")");
    }if(i===0){
            console.log(name+ "   your chanes is over try again")
    }
}
}else if (userInput===2){
    var i=4;
    console.log(name+"   your chanses is 4 for guess the number");
    while(i>0){
        var guess=Input.questionInt(name +"  enter number wich you guess");
        if (guess===MyNumber){
            console.log(name +"  wow your guess is right ");
            break
        }else if(guess<MyNumber){
            i--
            console.log(name+"  your guess is to small your chanses is","("+i+")");
        }else if (guess>=MyNumber){
            i--
            console.log(name  +" your guess to higher your  chanses is ","("+i+")");
        }
    }if(i===0){
        console.log(name+"  your chanes is over try again")
}
}else if(userInput === 3){
    var i=3;
    console.log(name+"  your chanses is 3 for guess the number");
    while (i>0){
        var guess=Input.questionInt(name+"  enter number wich you guess","("+i+")");
        if (guess===MyNumber){
            console.log(name+"  wow your guess is right ")
            break
        }else if(guess<MyNumber){
            i--
            console.log(name+"   your guess is to small your chanses is","("+i+")");
        }else if (guess>=MyNumber){
            i--
            console.log(name+"   your guess to higher your  chanses is ","("+i+")");
        }
    }if(i===0){
        console.log(name+"   your chanes is over try again")
}
}