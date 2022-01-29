import views from "../views/generate.html";

export default () => {
  let divElement = document.createElement("div");
  divElement.innerHTML = views;

  let generateList = divElement.querySelector(".generate-list");

  
  for (let i = 0; i < 10; ++i) {
    listItemsArray.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = "";
      li.innerHTML += item[1];
      generateList.appendChild(li);
    });
  }

  return divElement;
};
