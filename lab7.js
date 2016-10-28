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
    document.getElementById("gogostop").value = "";
    ctx.clearRect(0,0,800,800);
    drawObject(ctx,xaxis,yaxis);
}

function up()
{
    ctx.save()
    if(yaxis < 40)
    {
        document.getElementById("gogostop").value = "STOP";    
    }else
        { 
            ctx.clearRect(0,0,800,800);
            drawObject(ctx,xaxis,yaxis-10);
            ctx.restore();
            yaxis -=10;   
        }
}

function down()
{
    ctx.save()
    if(yaxis > 765)
    {
        document.getElementById("gogostop").value = "NO YOU'LL HURT IT";
    }else
        { 
            ctx.clearRect(0,0,800,800);
            drawObject(ctx,xaxis,yaxis+10);
            ctx.restore();
            yaxis +=10;   
        }
}

function left()
{
    ctx.save()
    if(xaxis < 40)
    {
        document.getElementById("gogostop").value = "SERIOUSLY DON'T";
    }else
        {
            ctx.clearRect(0,0,800,800);
            drawObject(ctx,xaxis-10,yaxis);
            ctx.restore();
            xaxis -=10;
        }
}

function right()
{
    ctx.save()
    if(xaxis > 765)
    {
        document.getElementById("gogostop").value = "BAD IDEA";
    }else
        {
            ctx.clearRect(0,0,800,800);
            drawObject(ctx,xaxis+10,yaxis);
            ctx.restore();
            xaxis +=10;
        }
}

drawObject(ctx,xaxis,yaxis);