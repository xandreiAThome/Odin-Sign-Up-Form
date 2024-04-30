const rightContainer = document.querySelector(".right-container");

//generate dots
// code from https://codepen.io/devAnkur/pen/zoJzdw
class freshDot {
  constructor() {
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = rightContainer.clientHeight * Math.random() + "px";
    this.obj.style.left = rightContainer.clientWidth * Math.random() + "px";
    this.size = Math.floor(1 * Math.random()) + 3;
    this.obj.style.height = this.size + "px";
    this.obj.style.width = this.size + "px";
    rightContainer.appendChild(this.obj);
  }
}

// generates initial dots
let dot = [];
for (var i = 0; i < 200; i++) {
  dot.push(new freshDot());
}

// generates new dots on resize and removes old ones
window.addEventListener("resize", (e) => {
  for (y = 0; y < dot.length; y++) {
    dot[y].obj.remove();
  }
  dot = [];
  for (var i = 0; i < 200; i++) {
    dot.push(new freshDot());
  }
});
