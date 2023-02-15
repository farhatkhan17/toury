var tl = gsap.timeline() 
tl.from("#nav h1, #nav h4, #nav button",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2
})
.from("#page1content h1,#page1content h3, #page1content button",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.2
})
gsap.from("#page2 h1",{
    x:-100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",

    }
})
gsap.from("#page2 i",{
    x:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 i",
        scroller:"body",
        // markers:true,
        start:"top 70%",

    }
})
gsap.from("#page2 #page2div",{
    x:400,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2div",
        scroller:"body",
        // markers:true,
        start:"top 80%",

    }
})
