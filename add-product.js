const prdName = document.querySelector("#prd-name");
const prdPrice = document.querySelector("#prd-price");
const prdImage = document.querySelector("#prd-image");
const addForm = document.querySelector("#form-add");
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
addForm.addEventListener("submit", () => {
  let newProduct = {
    name: prdName.value,
    price: prdPrice.value,
    image: prdImage.value,
  };
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  }).then(() => (window.location = "./index.html"));
});
