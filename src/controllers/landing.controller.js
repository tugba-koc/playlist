import views from "../views/landing.html";

export default () => {
  let divElement = document.createElement("div");
  divElement.innerHTML = views;

  const openModalButtons = divElement.querySelectorAll("[data-modal-target]");
  const closeModalButtons = divElement.querySelectorAll("[data-close-button]");
  const overlay = divElement.querySelector("#overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = divElement.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = divElement.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  // add item to the list

  let values = [];
  let listItems = [];
  let list = divElement.querySelector("#list");

  const saveButton = divElement.querySelector(".save");
  const cancelButton = divElement.querySelector(".cancel");
  let inputs = divElement.querySelectorAll("input");

  let listItemStructure = "";

  cancelButton.addEventListener("click", () => {
    closeModal(modal);
    inputs.forEach((input) => {
      input.value = "";
    });
  });

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();

    let id = new Date().getTime();

    inputs.forEach((input) => {
      values.push(input.value);
    });

    if (values[0] == "" || values[1] == "") {
      values = values.slice(3);
      return false;
    }

    values.push(id);

    values.unshift(listItems.length + 1);

    list.innerHTML += `
    <li class="list-item">
        
          <p class="list-item-content-text-title">
          ${values[0]}
          </p>
          <p class="list-item-content-text-description">
          ${values[1]}
          </p>
          <p class="list-item-content-text-weight">
          weight : ${values[3]}
          </p>
        
        <div class="list-item-content-buttons">
          <button class="list-item-content-buttons-edit">
          <i class="fa fa-pencil-square-o fa-lg" ></i>
          </button>
          <button id=${values[4]} class="list-item-content-buttons-delete">
          
          <i class="fa fa-trash fa-lg" ></i>
          </button>
        </div>
     
    </li>
  `;

    listItems.push(values);

    let counts = divElement.querySelectorAll(".list-item-content-text-title");

    let deleteButtons = divElement.querySelectorAll(
      ".list-item-content-buttons-delete"
    );

    let editButtons = divElement.querySelectorAll(
      ".list-item-content-buttons-edit"
    );

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        let item = event.target.closest(".list-item");
        item.remove();
        counts.forEach((count) => (count.innerHTML = count.innerHTML - 1));
        listItems = listItems.filter((item) => item[4] != event.target.id);
      });
    });


    inputs.forEach((input) => {
      input.value = "";
    });

    closeModal(modal);

    values = [];
  });

  return divElement;
};
