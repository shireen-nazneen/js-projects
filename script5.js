// function that display value
// write a function name display which takes an argument value and display it 
// to screen and get the element td which has the id of screen and add the 
// current value
function display(v){
    var tr = document.getElementById("screen")
    tr.value += v
}

    // - take an argument value that user pressed 
    // - Add the value that came from function to screen value by assignment operator
// function that evaluates the digit and return result after computing
// write a another function name solve which takes no argument which evaluvates the expression .... ?? 

function solution(){
    var tr = document.getElementById("screen")
    var a = eval(tr.value)
    tr.value=a
}
// - get the expression that came after pressing equal to and store it in a variable
// - and use eval to compute the mathematical expression
// - and again the screen with the value that came after computing 

   
// function that clear the display
// write a another function name clear which takes no  argument which clears the expression that is there
//  on screen 
    // - update the value of screen to empty string
function clear_needed(){
    var tr = document.getElementById("screen")
    tr.value=" "
}
// write clear function here
