//web audio volume controller 
function drw()
 {     
   function getpos(event)
    {
     var x = new Number();
     x = event.x;
     var y = new Number(); 
     y = event.y;
     x-=250;
     y-=250;
     getPostionsOfIntersec(ctx,x,y);
    }

var cnvs= document.getElementById("w");
cnvs.addEventListener("mouseup",getpos,false);    
var ctx = cnvs.getContext("2d");
ctx.lineWidth =2;
ctx.translate(250,250);
ctx.strokeStyle = "#00375C";
ctx.arc(0,0,40,0,2*Math.PI,false);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(0,0,70,0,2*Math.PI,false);
ctx.stroke(); 
ctx.closePath();
ctx.save();
var getPostionsOfIntersec = function (c,posx,posy)
{

  var angle= Math.atan2(posy,posx);
  var pointx1 = Math.round(Math.cos(angle)*40);
  var pointy1 = Math.round(Math.sin(angle)*40);
  var pointx2 = Math.round(Math.cos(angle)*70);
  var pointy2 = Math.round(Math.sin(angle)*70);
  drawarc(angle);
  percent(Math.abs(angle));
}
var drawpoints = function(b,c,d,e)
 {    ctx.beginPath();
 ;
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
 var drawarc = function (a)
{
    for (var i =0; i < 27; i++) 
      {
        ctx.beginPath();
        ctx.strokeStyle = "#00FF00";
        ctx.arc(0,0,68-i,3*Math.PI/2,a,false);
        ctx.stroke();
        ctx.closePath();
      } 
     
}
var percent = function(v) 
 {
   var p = Math.round((v/(2*Math.PI))*100);
   ctx.beginPath();
   ctx.font ="20px Georgia";
   ctx.fillText( p+" %" ,100,100);
 }
}
