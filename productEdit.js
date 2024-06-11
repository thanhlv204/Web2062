const searchParam = new URLSearchParams(document.location.search);
const id = searchParam.get("id");

const prdName = document.querySelector("#prd-name");
const prdPrice = document.querySelector("#prd-price");
const prdImage = document.querySelector("#prd-image");
const updateForm = document.querySelector("#form-edit");

updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
fetch("http://localhost:3000/products/" + id)
  .then((response) => response.json())
  .then((data) => {
    prdName.value = data.name;
    prdPrice.value = data.price;
    prdImage.value = data.image;
  });

updateForm.addEventListener("submit", () => {
  let updateData = {
    name: prdName.value,
    price: prdPrice.value,
    image: prdImage.value,
  };
  fetch("http://localhost:3000/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  }).then(() => (window.location = "./index.html"));
});
