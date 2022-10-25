let mobileDisplay = document.getElementById('mobile');
let desktopDisplay = document.getElementById('desktop');

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobileDisplay.style.display = 'block';
    desktopDisplay.style.display = 'none';
}