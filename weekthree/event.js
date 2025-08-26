//what are events Is a triggered actionby a user or browser which can result into signals, notifications etc
//Key words used in events
//1. Event listening :click-(Always watching/listening to an event)
//2. Event handling : is that function that happens after listening.



//let button= document.getElementById("click"); //this line is for selecting a button

//button .aadeventlistener("click",function(){ // this line is for adding a function to the button
    //window.alert("you have clicked a button");

//});
//let price = ((document.getElementById("price")).value )
//let qty = ((document.getElementById("qty")) . value)
//let total = document.getElementById("total");
//let calcBtn =document.getElementById("calcBtn")


//function  updatetotal(){
  //  let cost = price * qty;
  //  cost.toLocaleString();
//total. textContent =  "total: UGX" + cost
//return;
//}
//price.aadeventlistener("input", updatetotal)
//qty.aadeventlistener("input",updatetotal)



let total = document .getElementById("total");
let calcBtn = document.getElementById("calcBtn")

function updatetotal(){
    let price = Number(document.getElementById("price").value);
    let qty = Number(document.getElementById("qty").value);

    let cost =price * qty;
    total.textContent = "total: UGX ${cost.tolocalString()}";
}
//calcBtn qty.addEventListener("input", updateTota);