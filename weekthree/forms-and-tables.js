const form = document.getElementById("userform")
const tableBody = document.querySelector("#userTable tbody");
// document.getElementById("email error")
form.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;
// console.log(name);
// create a new row
const newRow = document.createElement("tr");
newRow.innerHTML =`<td>${name}</td> <td>${email}</td> <td>${age}</td>`

tableBody.appendChild(newRow)
form.reset();           //clears the form so that it goes back to normal
}




