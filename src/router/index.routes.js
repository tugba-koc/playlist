import Home from "../views/home.js";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      return content.appendChild(Home());
      break;
    case "#/about":
      renderAbout();
      break;
    case "#/contact":
      renderContact();
      break;
    default:
      renderHome();
      break;
  }
};

export default router;
