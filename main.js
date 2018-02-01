
var respo = function() {

var xhr = new XMLHttpRequest();
xhr.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=97338,us&units=imperial&appid=103dcdcb4214add86189a9f60f2583b7", false);
xhr.send();
// Add your code above this line!

console.log(xhr.status);
// console.log(xhr.response);
// console.log(xhr.statusText);

var json = JSON.parse(xhr.response);
console.log(json);
console.log(json.name);
console.log(json.wind.deg);
}

respo();