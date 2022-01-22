import "./main.css";
import router from "./router/index.routes";

console.log("Hello World!");


window.addEventListener("hashchange", () => {
    router(window.location.hash);
});
    