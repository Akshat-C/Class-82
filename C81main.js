var mousevent = "empty";
var lpx, lpy;
var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 5;

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mousevent= "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mousevent= "mouseLeave";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mousevent= "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if(mousevent=="mouseDown")
    {
      ctx.beginPath();
      ctx.strokeStyle= color;
      ctx.lineWidth= width;
      ctx.moveTo(lpx, lpy);
      ctx.lineTo(cpx, cpy);
      ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
}