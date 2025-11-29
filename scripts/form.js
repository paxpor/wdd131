const products = [
  { id: 1, name: "Standard Drill" },
  { id: 2, name: "Impact Driver" },
  { id: 3, name: "Hammer Drill" },
  { id: 4, name: "Orbital Sander" },
  { id: 5, name: "Jigsaw" }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");

  if (select) {
    products.forEach(p => {
      const option = document.createElement("option");
      option.value = p.name;
      option.textContent = p.name;
      select.appendChild(option);
    });
  }

  const lastMod = document.getElementById("lastModified");

  if (lastMod) {
    const date = new Date(document.lastModified);

    lastMod.textContent =
      "Last Modified: " +
      date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) +
      " at " +
      date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit"
      });
  }
});
