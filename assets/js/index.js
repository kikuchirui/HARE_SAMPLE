ScrollTrigger.matchMedia({
    "(max-width: 768px)": function() {
        gsap.fromTo('.mv-inner',
            { y: 0 , scale: 1, width: '75%'},
            { y: 0, scale: 1, width: '100%', delay:0, duration:1, ease: 'power2.out',
                scrollTrigger: {
                trigger: '.mainvisual',
                start: 'top top',
                end: 'bottom center',
                scrub: 1,
                pin: false,
                  toggleClass: {targets: '.js-mainv', className: "is-active"},
                }
            }
        );
    }   
});

gsap.fromTo('.js-mv__hide',
      { y: 0 , opacity: 1},
      { y: 0, opacity: 0,delay: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.mainvisual',
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
          markers: false,
          pin: false,
          toggleClass: {targets: '.js-mv__hide'},
        }
      }
);

ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
        gsap.fromTo('.mv-inner',
        { y: 0 , scale: 1, width: '80%'},
        { y: 0, scale: 1, width: '100%', delay: 0, duration:1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.mainvisual',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
            pin: false,
          //   toggleClass: {targets: '.js-mainv', className: "is-active"},
        
        }
        }
    );
    }
});