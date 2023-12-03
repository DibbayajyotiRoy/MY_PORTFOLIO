function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    // parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces it's value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

revealToSpan();

var tl = gsap.timeline();

tl.from(".child span", {
  x: 100,
  stagger: .2,
  duration: 2,
  delay: 1,
  ease: Power3.easeInOut,
});

tl.to(".parent .child", {
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut,
});
