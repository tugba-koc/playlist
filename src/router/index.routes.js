import { pages } from "../controllers/index.js";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/landing":
      return content.appendChild(pages.landing());
      break;
    case "#/generate":
      return content.appendChild(pages.generate());
      break;
    case "#/contact":
      console.log("contact");
      break;
    default:
        console.log("contact");
      break;
  }
};

export { router };
