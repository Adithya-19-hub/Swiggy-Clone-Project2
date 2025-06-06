// JS Logic for Explore localities. 
let array1 = [
    { names: "North Mumbai Restaurants" },
    { names: "India Gate Restaurants" },
    { names: "Sohna Restaurants" },
    { names: "Lodhi Restaurants" },
    { names: "Sector 1 Restaurants" },
    { names: "Jail Road Restaurants" },
    { names: "Sector 70A Restaurants" },
    { names: "Mumbai Cantt Restaurants" },
    { names: "Sainik Farms Restaurants" },
    { names: "Sector 143 Restaurants" },
    { names: "Model Town Restaurants" },
    { names: "Anang Lok Restaurants" },
    { names: "Vishnu Garden Restaurants" },
    { names: "Town Hall Restaurants" },
    { names: "Surajpur Road Restaurants" },
    { names: "Sector 7 Restaurants" },
];

let a = document.getElementById('Show-More');
let b = document.getElementById('cities');
let c = document.getElementById('Unique-work');



a.addEventListener('click', foo);
a.addEventListener('click', fun1);


// When the user clicks this function logic will trigger.
function foo() {
    b.innerHTML = "<div class='Swiggy-boxes'><a href='#'>South Mumbai Restaurants</a></div>";
    a.style.display = 'None';
}


function fun1() {
    array1.forEach((items, index) => {
        c.innerHTML += `<div id=${index} class='Swiggy-boxes'><a href='#'>${items.names}</a></div>`
    });
}



// JS Logic for Explore Top Cuisine Dining Sports. 
let array2 = [
    { names: "Korean Restaurants" },
    { names: "Thai Restaurants" },
    { names: "World Cuisine Restaurants" },
    { names: "Turkish Restaurants" },
    { names: "Tibetan Restaurants" },
    { names: "Rajasthani Restaurants" },
    { names: "Sandwich Restaurants" },
    { names: "Tex Mex Restaurants" },
    { names: "North Indian Restaurants" },
    { names: "Nepalese Restaurants" },
    { names: "Middle Eastern Restaurants" },
    { names: "Mughlai Restaurants" },
    { names: "Portuguese Restaurants" },
    { names: "Parsi Restaurants" },
    { names: "Seafood Restaurants" },
    { names: "Kebab Restaurants" }
];

let d = document.getElementById('Show-More2');
let e = document.getElementById('grocery-items');
let f = document.getElementById('Unique-work2');


d.addEventListener('click', fun3);
d.addEventListener('click', fun4);


// When the user clicks this function logic will trigger.
function fun3() {
    e.innerHTML = "<div class='Swiggy-boxes'><a href='#'>Ice Cream Restaurants</a></div>"
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
    p.innerHTML = "<span>experience. Make your reservations today and discover your new favorite spot! Let Mumbai's culinary delights take you on a gastronomic journey like never before.</span>";
    p.style.color = 'grey';
    p.style.fontSize = '13px';
}


let v = document.getElementById('account');
v.addEventListener('click', fun11);

function fun11() {
    window.location.href = "Swiggy.html";
}