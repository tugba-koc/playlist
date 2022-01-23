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
  let list = divElement.querySelector("#list");

  const saveButton = divElement.querySelector(".save");
  const cancelButton = divElement.querySelector(".cancel");
  let inputs = divElement.querySelectorAll("input");
  let count = 0;

  cancelButton.addEventListener("click", (event) => {
    closeModal(modal);

    inputs.forEach((input) => {
      input.value = "";
    });
  });

  let listItemStructure = "";
  function addValues(values) {
    listItemStructure += `
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
            <i class="fas fa-pen"></i>
            edit
          </button>
          <button class="list-item-content-buttons-delete">
            <i class="fas fa-trash"></i>
            delete
          </button>
        </div>
     
    </li>
  `;
  }

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    count++;
    let id = new Date().getTime();

    inputs.forEach((input) => {
      values.push(input.value);
    });

    if (values[0] == "" || values[1] == "") {
      values = values.slice(3);
      return false;
    }

    values.push(id);

    values.unshift(count);

    addValues(values);

    console.log(values);
    list.innerHTML = listItemStructure;
    inputs.forEach((input) => {
      input.value = "";
    });
    closeModal(modal);
    values = [];
  });

  return divElement;
};
