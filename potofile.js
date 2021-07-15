function myname(){
    console.log(1)
     document.getElementById("myname").innerHTML=""
}
function mycontact(){
    document.getElementById("contact").innerHTML=7411897682
}
function qualification(){
    document.getElementById("qualification").innerHTML="sslc ,python developer "
}
function more(){
    var link1=document.getElementById("more");
    var  a=document.createElement("a");
    var link = document.createTextNode("This is link");
    a.appendChild(link); 
    a.href="http://127.0.0.1:5500/q1.html"; 
    link1.innerHTML=a                 
}
function submit(){
    document.getElementById("submit").innerHTML="your Response is saved"
}