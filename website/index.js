const increasebtn =document.getElementById("increasebtn");
const resetbtn =document.getElementById("resetbtn");
const decreasebtn =document.getElementById("decreasebtn");
const countlabe =document.getElementById("countlable");
let count=0;

increasebtn.onclick=function(){
    count++;
    countlabe.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabe.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabe.textContent=count;
}