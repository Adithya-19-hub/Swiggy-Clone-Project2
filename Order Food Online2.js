let array1 = [
    { names: "Paltra" },
    { names: "Jharsa" },
    { names: "Smaspur" },
    { names: "Gurgoan Road" },
    { names: "Railwary Road" },
    { names: "Air Force" },
    { names: "Carterpuri" },
    { names: "Central Gurgoan" },
    { names: "Mini Sectt" },
    { names: "Sikohpur" },
    { names: "Basai Road" },
    { names: "Taj Nagar" },
    { names: "Teekli" },
    { names: "Arjun Nagar" },
    { names: "Palam Road" },
    { names: "K H B Colony" }
];

let a = document.getElementById('Show-More');
let b = document.getElementById('cities');
let c = document.getElementById('Unique-work');

a.addEventListener('click', foo);
a.addEventListener('click', fun1);

// When the user clicks this function logic will trigger.
function foo() {
    b.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Mandi</a></div>";
    a.style.display = 'None';
}

// When the user clicks this function logic will trigger.
function fun1() {
    array1.forEach((items, index) => {
        c.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
}

let array2 = [
    { names: "Cold Coffee" },
    { names: "Bread" },
    { names: "Curry" },
    { names: "Lassi" },
    { names: "Soup" },
    { names: "Pasta" },
    { names: "Upma" },
    { names: "Peri Peri Fries" },
    { names: "Meals" },
    { names: "Tea" },
    { names: "Samosa" },
    { names: "Paya" },
    { names: "Fish Fry" },
    { names: "Halwa" },
    { names: "Dal Bati" },
    { names: "Sev Puri" }
];

let d = document.getElementById('Show-More2');
let e = document.getElementById('grocery-items');
let f = document.getElementById('Unique-work2');

d.addEventListener('click', fun3);
d.addEventListener('click', fun4);


// When the user clicks this function logic will trigger.
function fun3() {
    e.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Veg Pizza</a></div>"
    d.style.display = 'None';
}

// When the user clicks this function logic will trigger.
function fun4() {
    array2.forEach((items, index) => {
        f.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
}

// JS Logic for More Cuisines Restaurants Options Near Me. 
let array3 = [
    { names: "Korean Restaurants near me" },
    { names: "Thai Restaurants near me" },
    { names: "World Cuisine Restaurants near me" },
    { names: "Turkish Restaurants near me" },
    { names: "Tibetan Restaurants near me" },
    { names: "Rajasthani Restaurants near me" },
    { names: "Sandwich Restaurants near me" },
    { names: "Tex Mex Restaurants near me" },
    { names: "North Indian Restaurants near me" },
    { names: "Nepalese Restaurants near me" },
    { names: "Middle Eastern Restaurants near me" },
    { names: "Mughlai Restaurants near me" },
    { names: "Portuguese Restaurants near me" },
    { names: "Parsi Restaurants near me" },
    { names: "Seafood Restaurants near me" },
    { names: "Kebab Restaurants near me" }
];


let j = document.getElementById('Show-More3');
let k = document.getElementById('nearme');
let l = document.getElementById('Unique-work6');


j.addEventListener('click', fun7);
j.addEventListener('click', fun8);


// When the user clicks this function logic will trigger.
function fun7() {
    k.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Ice Cream Restaurants near me</a></div>"
    j.style.display = 'None';
}

// When the user clicks this function logic will trigger.
function fun8() {
    array3.forEach((items, index) => {
        l.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
}



//When see more is clicked users can view more info.....
let q = document.getElementById('seemore');
let x = document.getElementById('morepara');
let z = document.getElementById('dots');

let p = document.createElement('p');
x.appendChild(p);

q.addEventListener('click', fun10);

function fun10() {
    z.style.display = 'None';
    q.style.display = 'None';
    p.innerHTML = "<span>But no worries, as Swiggy is here to help you. Just take a pause, order food online in Gurgoan, and you can resume work.</span>";
    p.style.color = 'grey';
    p.style.fontSize = '13px';
}


let v = document.getElementById('account');
v.addEventListener('click', fun11);

function fun11() {
    window.location.href = "Swiggy.html";
}