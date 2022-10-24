let sky = document.getElementById('sky');
let clouds1 = document.getElementById('clouds1');
let rocks = document.getElementById('rocks');
let clouds2 = document.getElementById('clouds2');
let ground1 = document.getElementById('ground1');
let ground2 = document.getElementById('ground2');
let ground3 = document.getElementById('ground3');
let plant = document.getElementById('plant');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    clouds1.style.top = -value * 0.05 + 'px';
    clouds2.style.top = -value * 0.05 + 'px';
    ground1.style.top = -value * 0.1 + 'px';
    ground2.style.top = -value * 0.15 + 'px';
    ground3.style.top = -value * 0.15 + 'px';
})

console.log("hi");