

var b=Math.random();
var number1=Math.floor(b*6)+1;
var number2=Math.floor(Math.random()*6)+1;

var randomimgsrc1 = "images/dice" + number1 + ".png";
var randomimgsrc2 = "images/dice" + number2 + ".png";


var image1 =document.querySelectorAll("img")[0];
var image2 =document.querySelectorAll("img")[1];

image1.setAttribute("src",randomimgsrc1);
image2.setAttribute("src",randomimgsrc2);


    
if (number1 > number2){
    document.querySelector("h1").innerHTML=" 🚩Player 1 WIN" ;
}
else if (number1===number2){
    document.querySelector("h1").innerHTML=" Draw !";
}
else{
    document.querySelector("h1").innerHTML=" Player 2 WIN 🚩" ;
}
