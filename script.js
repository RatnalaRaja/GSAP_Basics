var gs=gsap.timeline()

gs.from(".nav h3",{
    y:-50,
    opacity:0,
    duration:0.8,
    delay:0.4,
    stagger:0.4,
})

gs.from(".main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.6,
})

gs.from("img",{

    x:100,
    rotate:45,
    opacity:0,
   duration:0.5,
    stagger:0.5,
})