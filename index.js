//for smooth scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


////// gsap code for animation
var t1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".AnimateSection",
        // markers: true,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2, 
        pin: true
    }
})
t1.to(".revealUpSection", {
    top: "-50%"
}, "reveal")
t1.to(".revealDownSection", {
    bottom: "-50%"
}, "reveal")
t1.to(".innerText", {
    top: 0
}, "reveal")

