import views from  "../views/home.html"

export default () => {
  let divElement = document.createElement("div");
  divElement.innerHTML = views;
  return divElement;
};
