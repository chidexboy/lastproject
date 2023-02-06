let coutdown = document.getElementById('Counte-el');
let count = 0;
function increment(){
  count = count + 1
  coutdown.innerText = count;
}
//
let name = "Chidi Egesinu,";
let greeting="Welcome back to the Count app";
let nameall=document.getElementById('welcome-el');
nameall.innerText=name + " " + greeting;
nameall.innerText+=" ✋";
//
let seveel=document.getElementById('save-el');
console.log(seveel);
function save(){
  let countel=count + "-";
  seveel.textContent=countel;
  console.log(count);
}
