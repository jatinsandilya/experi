var getPostionsOfIntersec = function (c,posx,posy)
{

  var angle= Math.atan2(posy,posx);
  var pointx1 = Math.round(Math.cos(angle)*40);
  var pointy1 = Math.round(Math.sin(angle)*40);
  var pointx2 = Math.round(Math.cos(angle)*70);
  var pointy2 = Math.round(Math.sin(angle)*70);
  drawpoints(pointx1,pointy1,pointx2,pointy2);
  
}
var drawpoints = function(b,c,d,e)
 {    ctx.beginPath();
     ctx.fillStyle="rgb(255,165,0)";
     ctx.arc(b,c,5,0,2*Math.PI,false);
     ctx.fill();
     ctx.closePath();
     ctx.arc(d,e,5,0,2*Math.PI,false);
     ctx.fill();
     ctx.closePath();
     ctx.strokeStyle = "rgb(255,165,0)";
     ctx.beginPath();
     ctx.moveTo(b,c);
     ctx.lineTo(d,e);
     ctx.stroke();
     ctx.closePath();
     ctx.restore();
 }
 function getposOfmouseDown(event)
    {
     var x = new Number();
     x = event.x;
     var y = new Number(); 
     y = event.y;
     x-=250;
     y-=250;
     getPostionsOfIntersec(ctx,x,y);
    }

  var drawarc = function (a)
{
    for (var i =0; i < 30; i++) 
      {
        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,165,0)";
        ctx.arc(0,0,70-i,3*Math.PI/2,a,false);
        ctx.stroke();
        ctx.closePath();
      } 
}   