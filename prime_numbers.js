// for one prime number

function primeNumber(){
    var i=require("readline-sync");
    var j=i.questionInt("enter your number");
    c=0
    for (var k=1; k<=j; k++){
        if (j%k===0){
            c+=1
        }

    }if (c===2){
        console.log(`this is prime number ${j}`)
    }else{
        console.log(`this is not a prime number ${j}`)
    }

}
primeNumber();




// find the prime number how many we want

function prime_number(){
    var read=require("readline-sync");
    var numbers_prime=read.questionInt("enter how many prime numbers you want");
    var c=0;
    var i=0;
    while(c<numbers_prime){
        j=1
        count=0
        while (j<=i){
            if (i%j===0){
            count++
            }j++
        }if(count===2){
            console.log(i)
            c++
        }i++    
  
    }

}



// finde the prime number position with entring the numbers

function prime_number_postion_num(){
    var read=require("readline-sync");
    var numbers_prime=read.questionInt("enter prime number");
    var c=0;
    var i=0;
    while(c<numbers_prime){
        j=1
        count=0
        while (j<=i){
            if (i%j===0){
            count++
            }j++
        }if(count===2){
            c++
            if (i===numbers_prime){
                console.log(`${numbers_prime} this prime number position is  ${c}   ` )
            }   
        }i++
       
        
    }

}
  

prime_number_postion_num();
function prime_number_with_position(){
    var read=require("readline-sync");
    var numbers_position=read.questionInt("enter prime number position");
    var c=0;
    var i=0;
    while(c<numbers_position){
        j=1
        count=0
        while (j<=i){
            if (i%j===0){
            count++
            }j++
        }if(count===2){
            c++
            if (c===numbers_position){
                console.log(i)
            }
        }i++   
        
    }

}
  
