var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomNumber2= Math.floor(Math.random() * 6) + 1;
var randomNumber3=Math.floor(Math.random()*6)+1;
var randomNumber4=Math.floor(Math.random()*6)+1;
var randomNumber5=Math.floor(Math.random()*6)+1;

var refreshNumber1=Math.floor(Math.random() * 6) + 1;
var refreshNumber2=Math.floor(Math.random() * 6) + 1;
var refreshNumber3=Math.floor(Math.random() * 6) + 1;
var refreshNumber4=Math.floor(Math.random() * 6) + 1;
var refreshNumber5=Math.floor(Math.random() * 6) + 1;



var randomImageSource = "images/"+"dice"+randomNumber1+".png";
var randomImageSource2 = "images/"+"dice"+randomNumber2+".png";
var randomImagesource3="images/dice"+randomNumber3+".png";
var randomImagesource4="images/dice"+randomNumber4+".png";
var randomImagesource5="images/dice"+randomNumber5+".png";

var refreshImageSource1="images/"+"dice"+refreshNumber1+".png";
var refreshImageSource2="images/"+"dice"+refreshNumber2+".png";
var refreshImageSource3="images/"+"dice"+refreshNumber3+".png";
var refreshImageSource4="images/"+"dice"+refreshNumber4+".png";
var refreshImageSource5="images/"+"dice"+refreshNumber5+".png";


var imag1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
var imag2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
var img3=document.querySelectorAll("img")[2].setAttribute("src",randomImagesource3);
var img4=document.querySelectorAll("img")[3].setAttribute("src",randomImagesource4);
var img5=document.querySelectorAll("img")[4].setAttribute("src",randomImagesource5);

function myFunction1() {
    
    imag1=document.querySelectorAll("img")[0].setAttribute("src",refreshImageSource1);
}
function myFunction2() {
    
    imag1=document.querySelectorAll("img")[1].setAttribute("src",refreshImageSource2);
}
function myFunction3() {
    
    imag1=document.querySelectorAll("img")[2].setAttribute("src",refreshImageSource3);
}
function myFunction4() {
    
    imag1=document.querySelectorAll("img")[3].setAttribute("src",refreshImageSource4);
}
function myFunction5() {
    
    imag1=document.querySelectorAll("img")[4].setAttribute("src",refreshImageSource5);
}
