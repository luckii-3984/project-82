var mouseEvent = "empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var radius = "15";
var color = "red";
var width = 1;

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e) {

    color = document.getElementById("Inputcolor").value;
    width = document.getElementById("Inputwidth").value;
    radius = document.getElementById("Inputradius").value;

    mouseEvent = "mouseDown";
}

function my_mouseup(e) {

    mouseEvent = "mouseUp";

}

function my_mouseleave(e) {

    mouseEvent = "mouseleave";

}












function my_mousemove(e) {

    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;


    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(last_x, last_y, radius, 0, 2*Math.PI);
        ctx.stroke()

    }

    last_x = current_x;
    last_y = current_y;

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}