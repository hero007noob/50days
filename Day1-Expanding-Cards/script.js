let canvases = document.getElementsByClassName("canvas");
for (const canvas of canvases) {
  canvas.addEventListener("click", function (event) {
    expand(event);
  });
}
function expand(event) {
  for (const canvas of canvases) {
    canvas.classList.remove("active");
  }
  event.target.classList.add("active");
}
