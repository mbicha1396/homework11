//----------- player var
var x = 470;
var y = 570;
var d = 20;
//------------ enemy1 var
var x1 = 360;
var y1 = 5;
var s1 = 20;
var x1Speed;
var y1Speed;
//----------- enemy2 var
var x2 = 270;
var y2 = 575;
var s2 = 20;
var x2Speed;
var y2Speed;
//----------- enemy3 var
var x3 = 180;
var y3 = 5;
var s3 = 20;
var x3Speed;
var y3Speed;
//---------- enemy4 var
var x4 = 90;
var y4 = 575;
var s4 = 20;
var x4Speed;
var y4Speed;
//--------- mouse event
var mousex;
var mousey;

function setup() {
    createCanvas(500,600);
    x1Speed = floor(random() * 10 + 1);
    y1Speed = floor(random() * 10 + 1);
    x2Speed = floor(random() * 10 + 1);
    y2Speed = floor(random() * 10 + 1);
    x3Speed = floor(random() * 10 + 1);
    y3Speed = floor(random() * 10 + 1);
    x4Speed = floor(random() * 10 + 1);
    y4Speed = floor(random() * 10 + 1);
}

    function draw() {
        //----------- x and y coordinates displayer
        background(225);
        strokeWeight(1);
        stroke(0);
        fill (0);
        textSize(15);
        text("EXIT",10,25);
        text("X: " + mouseX,100,200 );
        text("Y: " + mouseY,100,220 );
        stroke(0);
        strokeWeight(1);
        //--------------------- borders of canvas
        rect(0,0,width,5);
        rect(0,595,width,5);
        rect(1,60,5,height);
        rect(495,0,5,height);
        // player
        fill (0,200,255);
        circle(x,y,d);
       
        //------------------------------ player movement
        //--------------- left;right
        if(keyIsDown(68))
        {
            x+=5;
        }
        if(keyIsDown(39))
        {
            x+=5;
        }
        if(keyIsDown(65))
        {
            x-=5;
        }
        if(keyIsDown(37))
        {
            x-=5;
        }

        //--------------- up;down
        if(keyIsDown(88))
        {
            y+=5;
        }
        if(keyIsDown(40))
        {
            y+=5;
        }
        if(keyIsDown(87))
        {
            y-=5;
        }
        if(keyIsDown(38))
        {
            y-=5;
        }
//--------------- enemy1 color
fill (255,255,0);

//--------------- enemy1
square(x1,y1,s1);

//----------------------------- enemy1 movement
x1Speed = floor(random() * 10);
y1Speed = floor(random() * 10);

x1 += x1Speed;
y1 += y1Speed;

if(x1 > width)
{
    x1 = 0;
}
if(x1 < 0)
{
    x1 = width;
}
if(y1 > height)
{
    y1 = 0;
}
if(y1 < 0)
{
    y1 = height;
}
//------------- enemy2 color
 fill(255,0,0);

 //-------------- enemy2
square(x2,y2,s2);

//------------------------------ enemy2 movement
x2Speed = floor(random() * 10);
y2Speed = floor(random() * 10);

x2 += x2Speed;
y2 += y2Speed

if(x2 > width)
{
    x2 = 0;
}
if(x2 < 0)
{
    x2 = width;
}
if(y2 > height)
{
    y2 = 0;
}
if(y2 < 0)
{
    y2 = height;
}
//--------------- enemy3 color
fill(255,255,0);

//---------------- enemy3
square (x3,y3,s3);

//----------------------------- enemy3 movement
x3Speed = floor(random() * 10);
y3Speed = floor(random() * 10);

x3 += x3Speed;
y3 += y3Speed;

if(x3 > width)
{
    x3 = 0;
}
if(x3 < 0)
{
    x3 = width;
}
if(y3 > height)
{
    y3 = 0;
}
if(y3 < 0)
{
    y3 = height;
}
//------------- enemy4 color
 fill(255,0,0);
//----------------- enemy4
square (x4,y4,s4);
//----------------------------- enemy4 movement
x4Speed = floor(random() * 10);
y4Speed = floor(random() * 10);

x4 += x4Speed;
y4 += y4Speed;

if(x4 > width)
{
    x4 = 0;
}
if(x4 < 0)
{
    x4 = width;
}
if(y4 > height)
{
    y4 = 0;
}
if(y4 < 0)
{
    y4 = height;
}
//----------------- square that appears during mouse event
 fill (180,0,255);
 square(mousex,mousey,20);

 //------------------ player wins
 if(x < 0 && y <= 60)
 {
    fill(255,135,0);
    stroke(5);
    textSize(30);
    text("Congratulations, You Win!",10,300);
 } 
 
}
 
//------------------------ this function makes the square appear
function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
 }