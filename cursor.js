// console.log("checking state")
// if(document.readyState === "complete") {
//   startCursor();
// }
// else {
//   console.log("adding listener")
//   //Add onload or DOMContentLoaded event listeners here: for example,
//   document.addEventListener("DOMContentLoaded", startCursor);
//   //or
//   //document.addEventListener("DOMContentLoaded", function () {/* code */}, false);
// }
var active = false;
var cursor;
var blink;

function startCursor(after) {
  console.log("starting cursor blink");
  if(cursor)
    return;
  cursor = document.getElementById("cursor");
  if(cursor) {
    // toggleCursor();
  } else {
    var el = document.createElement("span");
    el.id = "cursor";
    cursor = el;
    el.innerHTML = "█"
    if(after)
      insertAfter(el, after)
    else
      document.body.appendChild(el);
  }
  blink = setInterval(toggleCursor, 530);
}

function toggleCursor() {
  active = !active;
  cursor.style.opacity = (active == true) ? "1" : "0";
}

function killCursor() {
  if(!cursor)
    return;
  window.clearInterval(blink);
  cursor.parentElement.removeChild(cursor);
  cursor = undefined;
}

function insertAfter(newNode, after) {
  after.parentNode.insertBefore(newNode, after.nextSibling);
}