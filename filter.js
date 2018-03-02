var img=null,output;
var c1=0,c2=0;
function upload()
{
var ct=document.getElementById("c1");
ct.style.border="2px solid black";
var d1=document.getElementById("f1");
img=new SimpleImage(d1);
var ct=document.getElementById("c1");
img.drawTo(ct);
output=new SimpleImage(d1);
}
function blue()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed((avg*2)-255);
pixo.setBlue(255);
pixo.setGreen((avg*2)-255);
}
else{
pixo.setRed(0);
pixo.setBlue(avg*2);
pixo.setGreen(0);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function green()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed((avg*2)-255);
pixo.setBlue((avg*2)-255);
pixo.setGreen(255);
}
else{
pixo.setRed(0);
pixo.setBlue(0);
pixo.setGreen(avg*2);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function magenta()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
var ctx=ct.getContext("2d");
ctx.clearRect(0,0,ct.width,ct.height);
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed(255);
pixo.setBlue(255);
pixo.setGreen((avg*2)-255);
}
else{
pixo.setRed(avg*2);
pixo.setBlue(avg*2);
pixo.setGreen(0);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function cyan()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
var ctx=ct.getContext("2d");
ctx.clearRect(0,0,ct.width,ct.height);
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed((avg*2)-255);
pixo.setBlue(255);
pixo.setGreen(255);
}
else{
pixo.setRed(0);
pixo.setBlue(avg*2);
pixo.setGreen(avg*2);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function red()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed(255);
pixo.setBlue((avg*2)-255);
pixo.setGreen((avg*2)-255);
}
else{
pixo.setRed((avg*2));
pixo.setBlue(0);
pixo.setGreen(0);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function yellow()
{
if(img==null || !img.complete())
alert("Select image first");
var ct=document.getElementById("c1");
var ctx=ct.getContext("2d");
ctx.clearRect(0,0,ct.width,ct.height);
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
if(avg>=128){
pixo.setRed(255);
pixo.setBlue((avg*2)-255);
pixo.setGreen(255);
}
else{
pixo.setRed((avg*2));
pixo.setBlue(0);
pixo.setGreen(avg*2);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function bright1()
{
if(img==null || !img.complete())
alert("Select image first");
c1++;
c2--;
var ct=document.getElementById("c1");
for(var pix of img.values())
{
var x=pix.getX();
var y=pix.getY();
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
if(c1<=7){
pix.setRed(red+10);
pix.setBlue(blue+10);
pix.setGreen(green+10);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function bright_1()
{
if(img==null || !img.complete())
alert("Select image first");
c2++;
c1--;
var ct=document.getElementById("c1");
for(var pix of img.values())
{
var x=pix.getX();
var y=pix.getY();
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
if(c2<=7){
pix.setRed(red-10);
pix.setBlue(blue-10);
pix.setGreen(green-10);
}
}
ct.style.border="2px solid black";
img.drawTo(ct);
}
function gray()
{
if(img==null || !img.complete())
alert("Select image first");
for(var pix of output.values())
{
var x=pix.getX();
var y=pix.getY();
var pixo=img.getPixel(x,y);
var red=pix.getRed();
var blue=pix.getBlue();
var green=pix.getGreen();
var avg=(red+green+blue)/3;
pixo.setRed(avg);
pixo.setBlue(avg);
pixo.setGreen(avg);
}
var ct=document.getElementById("c1");
ct.style.border="2px solid black";
img.drawTo(ct);
}
function pane()
{
if(img==null || !img.complete())
alert("Select image first");
var dd1=document.getElementById("clr");
var panecol=dd1.value;
var ct=document.getElementById("c1");
var ctx=ct.getContext("2d");
ctx.fillStyle=panecol;
var w=img.getWidth();
var h=img.getHeight();
ct.style.border="solid 7px"+panecol;
ctx.fillRect((w/4),0,5,h);
ctx.fillRect((w/2),0,5,h);
ctx.fillRect((3*w/4),0,5,h);
ctx.fillRect(0,(h/2),w,5);
}
function blur1()
{
if(img==null || !img.complete())
alert("Select image first");
var c=0;
for(var pix of img.values())
{
var x=pix.getX();
var y=pix.getY();
if(c%2==0 && x<img.getWidth()-7 && y<img.getHeight()-7)
{
var pix1=output.getPixel(x+7,y+7);
img.setPixel(x+7,y+7,pix);
img.setPixel(x,y,pix1);
}
c++;
}
var ct=document.getElementById("c1");
ct.style.border="2px solid black";
img.drawTo(ct);
}
function reset()
{
c2=0;
c1=0;
var ct=document.getElementById("c1");
var ctx=ct.getContext("2d");
ctx.clearRect(0,0,ct.width,ct.height);
var d1=document.getElementById("f1");
img=new SimpleImage(d1);
ct.style.border="2px solid black";
img.drawTo(ct);
}
