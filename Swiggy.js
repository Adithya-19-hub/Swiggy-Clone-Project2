let array1 = [
    { names: "Order food online in Coimbatore" },
    { names: "Order food online in Lucknow" },
    { names: "Order food online in Nagpur" },
    { names: "Order food online in Vadodara" },
    { names: "Order food online in Indore" },
    { names: "Order food online in Vizag" },
    { names: "Order food online in Surat" },
    { names: "Order food online in Vijayawada" },
    { names: "Order food online in Ooty" },
    { names: "Order food online in Rajkot" },
    { names: "Order food online in Tirupur" },
    { names: "Order food online in Gwalior" },
    { names: "Order food online in Vellore" },
    { names: "Order food online in Warangal" },
    { names: "Order food online in Mangaluru" },
    { names: "Order food online in Patna" }
];

//Js logic for food delivery.
let a = document.getElementById('Show-More');
let b = document.getElementById('span');
let c = document.getElementById('Unique-work');

a.addEventListener('click', foo);
a.addEventListener('click', fun1);


// When the user clicks foo function logic will trigger.
function foo() {
    b.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Order food online in Kochi</a></div>";
    a.style.display = 'None';
}

function fun1() {
    array1.forEach((items, index) => {
        c.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
};


let array2 = [
    { names: "Order grocery delivery in Coimbatore" },
    { names: "Order grocery delivery in Lucknow" },
    { names: "Order grocery delivery in Nagpur" },
    { names: "Order grocery delivery in Vadodara" },
    { names: "Order grocery delivery in Indore" },
    { names: "Order grocery delivery in Vizag" },
    { names: "Order grocery delivery in Surat" },
    { names: "Order grocery delivery in Vijayawada" },
    { names: "Order grocery delivery in Ooty" },
    { names: "Order grocery delivery in Rajkot" },
    { names: "Order grocery delivery in Tirupur" },
    { names: "Order grocery delivery in Gwalior" },
    { names: "Order grocery delivery in Vellore" },
    { names: "Order grocery delivery in Warangal" },
    { names: "Order grocery delivery in Mangaluru" },
    { names: "Order grocery delivery in Patna" }
];
//Js logic for Grocery-items.
let d = document.getElementById('Show-More2');
let e = document.getElementById('grocery-items');
let f = document.getElementById('Unique-work2');


d.addEventListener('click', fun3);
d.addEventListener('click', fun4);


// When the user clicks this function logic will trigger.
function fun3() {
    e.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Order grocery delivery in Kochi</a></div>"
    d.style.display = 'None';
}

function fun4() {
    array2.forEach((items, index) => {
        f.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
};