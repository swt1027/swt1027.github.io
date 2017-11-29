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
}

