const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
while (cars[i]) {
text += cars[i] + "<br>";
i++;
}
document.getElementById("demo").innerHTML = text;