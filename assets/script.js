var data_types = document.getElementsByName('data_types');
var if_else = document.getElementsByName('if_else');
var arrays_in_JS = document.getElementsByName('arrays_in_JS'); 
var string_vals_must = document.getElementsByName('string_vals_must');
var useful_tools = document.getElementsByName('useful_tool');

function showSlides(n) {
  
  document.getElementsByClassName("mySlides")[n].removeAttribute("mySlidesInHiding");
  //slides[n].setAttribute("class", "block");


  //const slides = document.getElementByClass("mySlides").attributes;
  //slides[n].removeAttribute("mySlidesInHiding");

};



// document.getElementsByTagName("H1")[0].removeAttribute("class");


function calculateScore() {

let score = [''];

if (data_types.value == "Alerts") {score.push("1");};

if (if_else.value == "Parenthesis") {score.push("1");};

if (arrays_in_JS.value == "All of the Above") {score.push("1");};

if (string_vals_must.value == "Quotes") {score.push("1");};

if (useful_tools.value == "Console.Log") {score.push("1");};

console.log(score);

return (score); 
};

