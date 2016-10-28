var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

var xaxis = 400;
var yaxis = 400;

function drawObject (ctx, x, y)
{
    var grd= ctx.createLinearGradient(0,0,800,0);
    grd.addColorStop(0,"blue");
    grd.addColorStop(1,"red");
    ctx.fillStyle = grd;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,25,0,2*Math.PI);
    ctx.fill();
    ctx.restore();
}

function reset()
{
    xaxis = 400;
    yaxis = 400;
    ctx.clearRect(0,0,800,800);
    drawObject(ctx,xaxis,yaxis);
}

function up()
{
    ctx.save()
    ctx.clearRect(0,0,800,800);
    drawObject(ctx,xaxis,yaxis-10);
    ctx.restore();
}

drawObject(ctx,xaxis,yaxis);