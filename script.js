function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
  if (dets.direction === "up") {
      document.querySelector("#uppernav").style.top = "0%";
     
      
  }
  else if (dets.direction == "down") {
      document.querySelector("#uppernav").style.top = "-100%";
  }
})

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();

var tl1 = gsap.timeline();

tl1.from("#page3>h2",{
  opacity:0,
  y:150,
  duration:6,
  stagger:1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#page3>h2",
    scrub: 0.3,
  }
})


var tl2 = gsap.timeline();

tl2.from("#page5>h1",{
  opacity:0,
  y:150,
  duration:6,
  stagger:1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#page5>h1",
    scrub: 0.3,
  }
})

var tl3 = gsap.timeline();




const container = document.getElementById("photodiv");
  container.addEventListener("wheel", function (e) {
    if (e.deltaY> 0) {
      container.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });

  function showReel(){
    const showreel = document.querySelector("#circle");
  document.querySelector("#photodiv").addEventListener("mousemove", (e) =>{
     let  x = e.pageX;
     let y = e.pageY;
  
     showreel.style.top = y + "px";
     showreel.style.left = x + "px";
  })
  document.querySelector("#videodiv").addEventListener("mouseleave", function (e) {
    document.querySelector("#showreel").style.top = `50%`;
    document.querySelector("#showreel").style.left = `50%`;
  })
  }
  showReel();