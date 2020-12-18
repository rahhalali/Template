var x =document.getElementById("butt1");
var y=document.getElementById("click");

function mouse(){
    document.getElementById("butt").style.background =  "rgb(42, 197, 42)";
    document.getElementById("butt").style.color = "white";
    document.getElementById("butt").style.outlineColor="none";
}
function mouse1(){
    document.getElementById("butt").style.background = "white";
    document.getElementById("butt").style.color = "black";
}
function Show(){
    if(x.style.visibility === "hidden"){
        x.style.visibility = "visible";
        y.innerHTML ="learn less"
    }else{
        x.style.visibility = "hidden";
        y.innerHTML ="learn more";
    }
}
var n=0;
function Hovered(){
    n=n+1;
    document.getElementById("parag3").innerHTML = n;
}
var m=0;
function Hovere(){
    m=m+1;
    document.getElementById("parag1").innerHTML = m;
}
var l=0;
function Hover(){
    l=l+1;
    document.getElementById("parag2").innerHTML = l;
}