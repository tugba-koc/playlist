import {pages} from "../controllers/index.js";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      return content.appendChild(pages.home());
      break;
    case "#/about":
      console.log("about");

      break;
    case "#/contact":
      console.log("contact");

      break;
    default:
      renderHome();
      break;
  }
};

export { router };
