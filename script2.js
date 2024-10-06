function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll on the main container
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Update ScrollTrigger whenever Locomotive Scroll updates (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger to use Locomotive Scroll as the scroller
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // Ensure proper pin behavior on mobile devices
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed"
    });

    // Update Locomotive Scroll and ScrollTrigger after each update cycle
    locoScroll.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger after Locomotive Scroll finishes updating
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

// Initialize the locomotive scroll function
loco();


// cursor animation


function cursorEffect(){
    var page1Content = document.querySelector("#page1");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
         
        });
    });
}


cursorEffect();



// Timeline animations
var tl = gsap.timeline();

tl.from("nav div h1", {
    y: -30,
    duration: 0.1,
    delay: 0.3,
    opacity: 0
});

tl.from("nav div .unlist li a", {
    y: -30,
    stagger: 0.3,
    opacity: 0,
    duration: 1
});



tl.from("nav>ul>#list-item",{
    y:400,
    stagger:0.1,
  
    duration:0.5,
    

})

// ScrollTrigger animations for page 2
gsap.from("#page2", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 40%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page2 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 80%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page2 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 90%",
        
        markers:false,
        scrub: true
    }
});
gsap.from("#page3", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page3 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page3 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});
gsap.from("#page4", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page4 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page4 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});
gsap.from("#page5", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page5 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page5 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page6", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page6 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page6 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page6 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page7", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page7 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page7 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page7 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});
gsap.from("#page8", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page8",
        scroller: "#main", // Make sure scroller is properly referenced
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page8 h1", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page8 h1",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});

gsap.from("#page8 ul li", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top 90%",
        end: "bottom 20%",
        markers:false,
        scrub: true
    }
});


gsap.from("#page9-content1", {
    opacity: 0,
    y:-30,
    duration: 2,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#page9-content1",
        markers:false,
        start: "top bottom", // Adjust this as needed
        scroller: "#main",
        end: "top center",    // Adjust this as needed
      },
});

gsap.from("page9-content")


