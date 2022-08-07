"use strict"
const ninja = document.querySelector("#root > img");
ninja.style.left = 0;
ninja.style.top = 0;
document.body.onkeydown = function(e) {

  if (e.key === "d" || e.key === "D") {
    ninja.style.left = parseInt(ninja.style.left) + 10 + 'px';
  } else if (e.key === "w" || e.key === "W") {
    ninja.style.top = parseInt(ninja.style.top) - 10 + 'px';
  } else if (e.key === "s" || e.key === "S") {
    ninja.style.top = parseInt(ninja.style.top) + 10 + 'px';
  } else if (e.key === "a" || e.key === "A") {
    ninja.style.left = parseInt(ninja.style.left) - 10 + 'px';
  }
};

