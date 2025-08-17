console.log(document.title)
console.log("My file is connected")
console.log(document.body);
console.log(document.forms);
console.log(document.links);



let heading =document.getElementById("heading")
console.log(heading)
heading.textContent="WELCOME TO MAYONDO"
heading.style.color="blue"

let header = document.getElementById("first");
header.innerHTML ="<h2>For quality funiture products</h2>";


//EVENTS



//MORE DOM METHODS
document.getElementBytagname()
 let paragraph = document.getElementByClassName("about")
 console.log(paragraph.length)
document.querySelector()//this works excatly like css
document.querySelectorAll()//this captures everything


document.createElement()




let headingsArray=document.querySelectorAll("h2")
headingsArray[1].className="container"
headingsArray[1].id="subheadings"
//this captures everything


headingsArray[1].setAttribute("class","container")
headingsArray[1].setAttribute("id","subheadings")
headingsArray[1].textContent=("This is a subheading")
headingsArray[1].style.background= "pink"
headingsArray[1].style.textAlign= "center"
