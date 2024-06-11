const app = document.querySelector("#app");

const show = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      app.innerHTML = data
        .map((item, index) => {
          return `
        <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td><img src="${item.image}"></td>
        <td>${item.price}</td>
        <td>
          <a href="./productEdit.html?id=${item.id}"><button>Update</button></a>
            <button class="btn-delete" data-id="${item.id}">Delete</button>
        </td>
        
    </tr>

    
            `;
        })
        .join("");
    })
    .then(() => {
      const btnDeletes = document.querySelectorAll(".btn-delete");
      for (let btn of btnDeletes) {
        btn.addEventListener("click", () => {
          let id = btn.dataset.id;
          fetch("http://localhost:3000/products/" + id, {
            method: "DELETE",
          });
        });
      }
    });
};
show();
