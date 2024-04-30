const rightContainer = document.querySelector(".right-container");
console.log(rightContainer.clientHeight);

//generate dots
// code from https://codepen.io/devAnkur/pen/zoJzdw
class freshDot {
  constructor() {
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = rightContainer.clientHeight * Math.random() + "px";
    this.obj.style.left = rightContainer.clientWidth * Math.random() + "px";
    this.size = Math.floor(2 * Math.random()) + 4;
    this.obj.style.height = this.size + "px";
    this.obj.style.width = this.size + "px";
    rightContainer.appendChild(this.obj);
  }
}

var dot = [];
for (var i = 0; i < 200; i++) {
  dot.push(new freshDot());
}
