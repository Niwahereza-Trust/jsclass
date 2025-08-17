// Adding two numbers
function addTwoNumbers(x, h) {
    let sum = x + h;
    return sum;
}
console.log("Sum of numbers:", addTwoNumbers(5, 8));

// Calculating total cost
function calculateTotalCost(quantity, unitPrice) {
    const transportFee = 5000;
    let subTotalCost = quantity * unitPrice;
    let total = subTotalCost + transportFee;
    return total;
}
console.log("Total cost:", calculateTotalCost(2, 350000));

// Printing full name
function printfulllname() {
    let firstname = "Precious";
    let lastname = "Mary";
    let space = " ";
    let fullname = firstname + space + lastname;
    return fullname;
}
console.log("Full name:", printfulllname());

let actions = [
    function () {
        console.log("hello");
    },
    function () {
        console.log(1 + 1);
    }
]


// You can now call them like this:
actions[0](); // Output: hello
actions[1](); // Output: 2

let unitPrice;
let quantity;
let address ;
let productname;
let transportFee;
let vatfee;
let Payment ;
let calculatesubtotal;
let calculateunitprice;

let order ={
    unitPrice: 5000,
    quantity: 4,
calculatesubtotal: function(){
    return this.unitprice * this.quantity
},

        
};
order.unitprice
order.quantity
order.calculatesubtotal()
console.log(order.unitPrice + order.quantity)
let car ={
    name: "vitz",
    weight: 2000,
start: function(){
    return "vroom"
}
}
car.name
car.weight
car.start()
console.log(car.name +car.weight + car.start)