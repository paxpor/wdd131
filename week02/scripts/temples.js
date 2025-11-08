document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

hamButton.innerHTML = "☰";

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("show")) {
    hamButton.textContent = "✖";
  } else {
    hamButton.textContent = "☰";
  }
});
