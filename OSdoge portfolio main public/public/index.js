let sky = document.getElementById('sky');
let clouds1 = document.getElementById('clouds1');
let rocks = document.getElementById('rocks');
let clouds2 = document.getElementById('clouds2');
let ground1 = document.getElementById('ground1');
let ground2 = document.getElementById('ground2');
let ground3 = document.getElementById('ground3');
let plant = document.getElementById('plant');

let mobileDisplay = document.getElementById('mobile');
let desktopDisplay = document.getElementById('desktop');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * 0.5 + 'px';
    clouds1.style.top = value * 0.7 + 'px';
    clouds2.style.top = value * 0.7 + 'px';
    rocks.style.top = value * 0.7 + 'px';
    ground1.style.top = value * 0.7 + 'px';
    ground2.style.top = value * 0.7 + 'px';
    plant.style.top = -value * 0.3 + 'px';
})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobileDisplay.style.display = 'block';
    desktopDisplay.style.display = 'none';
}

console.log("hi");