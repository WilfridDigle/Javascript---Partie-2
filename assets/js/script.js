
// Exercice 1
document.getElementById('exercice1').onmouseover = function onMouseOver() {
    document.getElementById('exercice1').src="assets/img/chrome.png";
}
document.getElementById('exercice1').onmouseout = function onMouseOut() {
    document.getElementById('exercice1').src="assets/img/firefox.jpg";
}

// Exercice 2
document.getElementById('exercice2').onkeyup = function onKeyUp() {
    var exercice2 = document.getElementById('exercice2').value;
    alert(exercice2);
}

// Exercice 3
document.getElementById('exercice3').onclick = function imgGrow() {
    var myImg = document.getElementById('exercice3');
    var width = myImg.clientWidth;
    myImg.style.width = (width + 20) + "px";
}