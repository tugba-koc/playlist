import "./main.css";
import { router } from "./router/index.routes";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

let playlist = document.getElementById("playlist-link");

function loop() {
    setInterval(() => {
        playlist.classList.toggle("playlist-link-active");
    }, 1000);
}

loop();

