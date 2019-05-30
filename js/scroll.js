// Disable/Enable scroll

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
 console.log("when i am calling 1....")
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
 console.log("when i am calling 2....")

  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
 console.log("when i am calling 3....")

  if (window.addEventListener)
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
 console.log("when i am calling 4....")

  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

$("#navi-toggle").change(function() {
console.log("i am scrolling");
  console.log($(this));
  if (this.checked) {
    disableScroll();
  } else {
    enableScroll();
  }
});
