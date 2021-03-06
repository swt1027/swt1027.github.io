// JavaScript source code
function init() {
    reset();
}


/* This line gets all the HTML elements with class="light" and assigns them to a variable called LIGHTS. */
var LIGHTS = document.getElementsByClassName("light");

/* This defines a function which turns off every light by removing the "on" class from the HTML elements.*/
function allOff() {
    for (var i = 0; i < LIGHTS.length; i = i + 1) {
        LIGHTS[i].classList.remove("on");
    }
}

/* This defines a function which first turns off every light and then immediately turns one on.*/
function switchLight(lightNumber) {
    allOff();
    var light = LIGHTS[lightNumber];
    light.classList.add("on");

    if (lightNumber == 0)
        red();

    if (lightNumber == 2)
        ready();
}

var animate, left = 0, left2 = 0, imgObj1 = null, imgObj2 = null;
function ready() {
    

    imgObj1 = document.getElementById('greencar');
    imgObj2 = document.getElementById('yellowcar');
    imgObj1.style.position = 'absolute';
    imgObj1.style.top = '250px';
    imgObj1.style.left = '0px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.top = '500px';
    imgObj2.style.left = '5px';

    green();
}

function green() {
    

    var greenSpeed = Math.round((Math.random() * 10) + 1);
    var yellowSpeed = Math.round((Math.random() * 10) + 1);
    left = parseInt(imgObj1.style.left, 15);
    left2 = parseInt(imgObj2.style.left, 15);

    if (1800 >= left && 1800 >= left2) {
        imgObj1.style.left = (left + greenSpeed) + 'px';
        imgObj1.style.visibility = 'visible';
        imgObj2.style.left = (left + yellowSpeed) + 'px';
        imgObj2.style.visibility = 'visible';

        animate = setTimeout(function () { green(); }, 200);
    }

    else if (imgObj1.style.left > imgObj2.style.left) {
        alert("Green Car Wins! Click Red Light to Reset");
    }
    else if (imgObj2.style.left > imgObj1.style.left) {
        alert("Yellow Car Wins! Click Red Light to Reset");
    }
    else if (imObj1.style.left == imgObj2.style.left) {
        alert("Both Cars Tie! Click Red to Reset");
    }


}

function red() {
    clearTimeout(animate);
    reset();
}

function reset() {
    imgObj1 = document.getElementById('greencar');
    imgObj2 = document.getElementById('yellowcar');
    imgObj1.style.position = 'absolute';
    imgObj1.style.top = '250px';
    imgObj1.style.left = '0px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.top = '500px';
    imgObj2.style.left = '5px';
}

window.onload = function () { init(); };

