const products = [
  { id: 1, name: "Standard Drill" },
  { id: 2, name: "Impact Driver" },
  { id: 3, name: "Hammer Drill" },
  { id: 4, name: "Orbital Sander" },
  { id: 5, name: "Jigsaw" }
];

window.onload = () => {
  const select = document.getElementById("productName");

  products.forEach(p => {
    const option = document.createElement("option");
    option.value = p.name;
    option.textContent = p.name;
    select.appendChild(option);
  });
};
