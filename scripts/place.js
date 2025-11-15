const yearSpan = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillOutput = document.getElementById("chill");

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

if (temp <= 50 && speed > 3) {
  chillOutput.textContent = `${calculateWindChill(temp, speed)}°F`;
} else {
  chillOutput.textContent = "N/A";
}