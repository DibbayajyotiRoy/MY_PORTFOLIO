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

function valueSetters(){
  gsap.set("#nav a", { y : "-100%", opacity: 0 })
  gsap.set( "#home .parent .child" , { y:"100%" })
  gsap.set( "#home .row img" , { opacity: 0 })

  document.querySelectorAll("#Visual>g").forEach(function(e){
    var character =e.childNodes[1].childNodes[1]

    character.style.strokeDasharray = character.getTotalLength() + 'px'
    character.style.strokeDashoffset = character.getTotalLength() + 'px'
  })

}

function loaderAnimation(){
  var tl = gsap.timeline();

tl.from("#loader .child span", {
  x: 100,
  stagger: .2,
  duration: 1.35,
  ease: Power3.easeInOut,
});

tl.to("#loader .parent .child", {
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut,
});


tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  });

tl.to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.82,
    ease: Circ.easeInOut,
  });

  tl.to("#green", {
    height: 0,
    duration: 1,
    delay: -.5,
    ease: Circ.easeInOut,
    onComplete: function(){
      animateHomePage()
    }
  });
}

function animateHomePage(){
 
  var tl = gsap.timeline()

  tl
  .to("#nav a", {
     y: 0,
     opacity: 1,
     stagger: .05,
     ease: Expo.easeInOut
  })
  .to("#home .parent .child", {
    y: 0,
    stagger: .1,
    duration: 1.5,
    ease: Expo.easeInOut
 })
 .to("#home .row img", {
  opacity: 1,
  delay: -.5 ,
  ease: Expo.easeInOut,
  omComplete: function(){
    animateSvg()
  }
})
}

function animateSvg(){
 gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
    strokeDashoffset : 0 ,
    duration : 4,
    repeat:-1,
    yoyo:true,
    ease: "power1",
  })
}

revealToSpan();
valueSetters();
loaderAnimation();





  