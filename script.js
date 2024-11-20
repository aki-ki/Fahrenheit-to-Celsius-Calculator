// Let values
let selector = document.getElementById("selector");
let convert = document.getElementById("convert");
let ftoc = document.getElementById("ftoc");
let convert2 = document.getElementById("convert2");

// // Event listeners
convert.addEventListener("click", toFahren);
convert2.addEventListener("click", toCels);
// Functions
function toFahren() {
  // Input
  let abc = document.getElementById("tempf");
  let tempf = Number(abc.value);
  //   Process
  let finalFahren = Math.round((tempf - 32) / 1.8);
  finalFahren = Math.round(finalFahren);
  //   Output
  document.getElementById("finalC").innerHTML = finalFahren + "°C";
  document.getElementById("link").href = "https://www.google.com";
  abc.value = "";
  convert.style.backgroundColor = "#26d978";
  document.getElementById("thermometer").innerHTML =
    "<img width='30px' src='images/thermometer.jpg' alt='thermometer'>";
}

function toCels() {
  // Input
  let cba = document.getElementById("celsius");
  let celsius = Number(cba.value);
  cba.value = "";
  // Process
  convert2.style.backgroundColor = "#26d978";
  let finalCelc = Math.round(celsius * 1.8 + 32);
  document.getElementById("finalF").innerHTML = finalCelc + "°F";
  document.getElementById("thermometer2").innerHTML =
    "<img width='30px' src='images/thermometer.jpg' alt='thermometer'>";
  // Output
}
