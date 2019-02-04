// The Javascript file that tells the  HTML file what to do and how the information should be processed.//


// 1) Print the first p tag to the console using the ID, class, and tag selectors.//
var Ptag = document.getElementsByTagName("p");
console.log(Ptag.textContent);

var Ptag1 = document.getElementById("first");
console.log(Ptag1.textContent);

var Ptag2 = document.getElementsByClassName("special");
console.log(Ptag2[0].textContent);

// 2) Print the special class using both the query selector and query all selector.//

var special = document.querySelector("class");

var special2 = document.querySelectorAll(".special")
// 3) Change the color of the h1 statement to blue.//
var allh1Elements1 = document.querySelectorAll("h1");

for(var i=0; i< allh1Elements1.length; i++){
    allh1Elements1[i].style.color = "blue";
}
// h1Element1.fontcolor = "blue";

// 4) Change the color of the last p tag to yellow.//
var last = document.getElementById("last");

last.style.color = "yellow";