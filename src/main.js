import "./main.css";
import { router } from "./router/index.routes";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

let playlist = document.getElementById("playlist-link");

function loop() {
  playlist.addEventListener("click", function () {
    playlist.classList.remove("playlist-link-active");
  });
  setInterval(() => {
    playlist.classList.toggle("playlist-link-active");
  }, 1000);
}

loop();
