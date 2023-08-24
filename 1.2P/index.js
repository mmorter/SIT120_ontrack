// String
function hello(){
    var hi = "hi";
    document.getElementById("hi").innerHTML = hi.replace("hi","Hello there!");
}

var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("abcl").innerHTML = abc.length;

var half1 = "Deakin";
var half2 = "Uni";
var full = half1.concat(" ",half2);
document.getElementById("joint").innerHTML = full;

var numb = "123";
var numbtext = numb.toString();
document.getElementById("padded").innerHTML = numbtext.padStart(4,"0");

function lower(){
    var change = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = change.toLowerCase();
}

// Numbers
document.getElementById("stringnumb").innerHTML = numb.toString() + "<br>" + (100 + 23).toString();

var x1 = 76.54321;
document.getElementById("expon").innerHTML = x1.toExponential(1) + "<br>" + x1.toExponential(3) + "<br>" + x1.toExponential(5) + "<br>" + 
x1.toExponential(7) +  "<br>" + x1.toExponential(9);

document.getElementById("fix").innerHTML = x1.toFixed(0) + "<br>" + x1.toFixed(2) + "<br>" + x1.toFixed(4) + "<br>" + x1.toFixed(6)

document.getElementById("precise").innerHTML =  x1.toPrecision() + "<br>" + x1.toPrecision(1) + "<br>" + x1.toPrecision(4) + "<br>" + x1.toPrecision(10); 

document.getElementById("val").innerHTML = numb.valueOf() + "<br>" + (456).valueOf() + "<br>" + (700 + 89).valueOf();


// Array
const fruit = ["Grape","Mango","Banana","Blueberry"];
document.getElementById("fruits").innerHTML = fruit.join(" - ");
var size = fruit.length;
document.getElementById("fruitsize").innerHTML = size;
fruit.shift();
document.getElementById("fruitshift").innerHTML = fruit;
document.getElementById("fruitpop").innerHTML = fruit.pop();


const x2 = [1,2,3,4];
document.getElementById("numbie").innerHTML = x2.toString();
x2.push(5);
document.getElementById("numbiepush").innerHTML = x2.toString();

// Date
const d = new Date();
document.getElementById("date").innerHTML = d;
document.getElementById("time").innerHTML = d.getTime();
document.getElementById("fullyear").innerHTML = d.getFullYear();
document.getElementById("hours").innerHTML = d.getHours();
document.getElementById("month").innerHTML = d.getUTCMonth();


// Function
var multiply = multiplyFunction(7, 5);
document.getElementById("multi").innerHTML = multiply;

function multiplyFunction(a, b) {
  return a * b;
}
