// JavaScript source code



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
    imgObj1.style.position = 'absoulte';
    imgObj1.style.top = '0px';
    imgObj1.style.left = '100px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.top = '100px';
    imgObj2.style.left = '100px';

    green();
}

function green() {
    var greenSpeed = Math.round((Math.random() * 2) + 50);
    var yellowSpeed = Math.round((Math.random() * 2) + 50);
    left = parseInt(imgObj1.style.left, 7);
    left2 = parseInt(imgObj2.style.left, 7);

    if (500 >= left && 500 >= left2) {
        imgObj1.style.left = left + greenSpeed + 'px';
        imgObj2.style.left = left + yellowSpeed + 'px';
        animate = setTimeout(green, 200);
    }

    else if (imgObj1.style.left > imgObj2.style.left) {
        alert("Green Car Wins!");
    }
    else if (imgObj2.style.left > imgObj1.style.left) {
        alert("Yellow Car Wins!");
    }
    else if (imObj1.style.left == imgObj2.style.left) {
        alert("Both Cars Tie!");
    }


}

function red() {
    clearTimeout(animate);
    reset();
}

function reset() {
    imgObj1 = document.getElementById('greencar');
    imgObj2 = document.getElementById('yellowcar');
    imgObj1.style.position = 'absoulte';
    imgObj1.style.top = '0px';
    imgObj1.style.left = '100px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.top = '100px';
    imgObj2.style.left = '100px';
}

