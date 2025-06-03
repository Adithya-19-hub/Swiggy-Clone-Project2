let b = document.getElementById('continuebtn');
let c = document.getElementById('content-para');

function changeColor() {
    b.style.backgroundColor = '#ff5200';
    b.style.color = '#ffff';
    b.style.cursor = 'pointer';
}

function changeText() {
    c.innerHTML = 'Increase your online <br/>orders';
    c.style.animationName = 'changeText';
    c.style.animationIterationCount = 'infinite';

    setTimeout(() => {
        c.innerHTML = 'Reach customers far <br/>away from you'
        c.style.animationName = 'changeText';
        c.style.animationIterationCount = 'infinite';
    }, 1000);

    setTimeout(() => {
        c.innerHTML = 'Access to Swiggy tools <br/> and support';
        c.style.animationName = 'changeText';
        c.style.animationIterationCount = 'infinite';
    }, 2000);
}
changeText();