const card = document.querySelector('.cards');
const page2 = document.getElementById('page2');

gsap.to(card , {
    x: -2200,
    duration: 3,
    scrollTrigger: {
        trigger: card,
        scroller: "body",
        // markers: true,
        start: "top 30%", 
        end: "top top",       
        scrub: 2
    }
});
