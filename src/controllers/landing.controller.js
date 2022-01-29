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
  let listItemsArray = [];
  let list = divElement.querySelector("#list");

  const saveButton = divElement.querySelector(".save");
  const cancelButton = divElement.querySelector(".cancel");
  let inputs = divElement.querySelectorAll("input");

  cancelButton.addEventListener("click", () => {
    closeModal(modal);
    inputs.forEach((input) => {
      input.value = "";
    });
  });

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();

    // create unique id for the item
    let id = new Date().getTime();

    // get the values from the input fields
    inputs.forEach((input) => {
      values.push(input.value);
    });

    // prevent empty values
    if (values[0] == "" || values[1] == "") {
      values = values.slice(3);
      return false;
    }

    values.push(id);

    values.unshift(listItemsArray.length + 1);

    // create a new list item
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");

    let pTitle = document.createElement("p");
    pTitle.classList.add("list-item-content-text-title");
    pTitle.innerHTML = values[0];

    let pDescription = document.createElement("p");
    pDescription.classList.add("list-item-content-text-description");
    pDescription.innerHTML = values[1];

    let pWeight = document.createElement("p");
    pWeight.classList.add("list-item-content-text-weight");
    pWeight.innerHTML = "weight : " + values[3];

    let div = document.createElement("div");
    div.classList.add("list-item-content-buttons");

    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("list-item-content-buttons-edit");
    buttonEdit.id = values[4];
    buttonEdit.onclick = function () {
      editItem(this.id, listItem);
    };

    let iEdit = document.createElement("i");
    iEdit.classList.add("fa", "fa-pencil-square-o", "fa-lg");

    let buttonDelete = document.createElement("button");
    buttonDelete.classList.add("list-item-content-buttons-delete");
    buttonDelete.id = values[4];
    buttonDelete.onclick = function () {
      deleteItem(this.id, listItem);
    };

    let iDelete = document.createElement("i");
    iDelete.classList.add("fa", "fa-trash", "fa-lg");

    // add the new list item to the list
    list.appendChild(listItem);

    // add the content to the list item
    listItem.appendChild(pTitle);
    listItem.appendChild(pDescription);
    listItem.appendChild(pWeight);
    listItem.appendChild(div);
    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);
    buttonEdit.appendChild(iEdit);
    buttonDelete.appendChild(iDelete);

    listItemsArray.push(values);

    // clear the input fields
    inputs.forEach((input) => {
      input.value = "";
    });

    // close the modal
    closeModal(modal);

    values = [];

    // add event listeners to the buttons to delete item
    function deleteItem(id, item) {
      event.preventDefault();
      list.removeChild(item);
      listItemsArray = listItemsArray.filter((el) => el[4] != id);
      listItemsArray.forEach((el) => (el[0] = el[0] - 1));
      let listItems = list.querySelectorAll(".list-item");
      listItems.forEach((item) => {
        item.querySelector(".list-item-content-text-title").innerHTML =
          listItems.length;
      });
    }

    // add event listeners to the buttons to edit the item
    function editItem(id, item) {
      openModal(modal);

      let itemArr = listItemsArray.filter((item) => item[4] == id);

      inputs[0].value = itemArr[0][1];
      inputs[1].value = itemArr[0][2];

      // select modal elements to edit
      let saveEditButton = divElement.querySelector(".save");
      let inputEditName = divElement.querySelectorAll("input")[0];
      let inputEditURL = divElement.querySelectorAll("input")[1];

      // when the modal is opened, first input field is focused
      inputEditName.focus();

      saveEditButton.addEventListener("click", (event) => {
        item.querySelector(".list-item-content-text-description").innerHTML =
          inputEditName.value;
        item.querySelector(".list-item-content-text-title").innerHTML =
          inputEditURL.value;
      });
      list.removeChild(item);
      listItemsArray = listItemsArray.filter((el) => el[4] != id);
      listItemsArray.forEach((el) => (el[0] = el[0] - 1));
    }

    console.log(listItemsArray);
  });

  return divElement;
};
