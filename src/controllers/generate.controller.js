import views from "../views/generate.html";

export default () => {
  let divElement = document.createElement("div");
  divElement.innerHTML = views;

  let deger = prompt("Kuşak kaç itemdan oluşsun?");

  let generateList = divElement.querySelector(".generate-list");

  let count = 0;
  listItemsArray.forEach((item) => (count += Number(item[3])));

  if (
    listItemsArray.length == 2 &&
    listItemsArray[0][3] != listItemsArray[1][3]
  ) {
    generateList.classList.add("error");
  }

  listItemsArray.forEach(function (el) {
    if (count % Number(el[3]) != 0) {
      generateList.classList.add("error");
    }
  });

  if (generateList.classList.contains("error")) {
    generateList.innerHTML = `<p class="error-message">ERROR</p>`;
  } else {
    for (let i = 0; i < Number(deger); ++i) {
      listItemsArray.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = "";
        li.innerHTML += item[1];
        generateList.appendChild(li);
      });
    }
  }
  console.log(listItemsArray);

  return divElement;
};
