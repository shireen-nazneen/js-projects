// var b=document.getElementById("container1");
function changeColor(){
    var b=document.getElementById("container1");
    var c=document.getElementById("input1")
    console.log(c)
    b.style.backgroundColor=c.value
    c.value=null
    

}
changeColor()