
let countel=document.getElementById("count-el");
let count=0;
function increment(){
  count +=1
  countel.textContent=count
}
let saveel=document.getElementById("save-el");
function save(){
  let currentnumber=count+"-";
  saveel.textContent+=currentnumber;
  countel.textContent=0;
}
function show(){
  getElementById("count-el").reset(count);
}

