import views from  "../views/landing.html"

export default () => {
  let divElement = document.createElement("div");
  divElement.innerHTML = views;
  return divElement;
};
