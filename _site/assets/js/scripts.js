// wait until DOM is ready (html and svg markup)
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded (images, external JS, external stylesheets, fonts, links, and other media assets)
    window.addEventListener("load", function(event) {
  
      // makes sure it runs after last render tick
      window.requestAnimationFrame(function() {
        
          // GSAP custom code goes here
          gsap.registerPlugin(ScrollTrigger);

          var desc = document.getElementsByClassName("project_description");


            // adjust spacing
            // function adjust() {
            //   for(var i=0; i<desc.length; i++) {
            //     desc[i].style.marginBottom = desc[i].offsetHeight + "px";
            //   }
            //
            // };



            function ux() {

            }

            function web() {

            }

            function graphic() {

            }

            function data() {

            }

            function menuOpen() {
                gsap.to("#full_menu", {
                    opacity: 1,
                    x: "100vw",
                    duration: 1,
                    ease: "power3",
                    });
            }



            function menuClose() {
                gsap.to("#full_menu", {
                opacity: 0,
                x: 0,
                duration: 1,
                ease: "power3",
                });
            }




            // Parallax
            gsap.to(".pFast", {
                yPercent: -300,
                ease: "none",
                scrollTrigger: {
                trigger: "body",
                start: "top top",
                endTrigger: "name_block",
                end:"bottom top",
                scrub: true,
                },
            });


            gsap.utils.toArray(".pSlow_desc").forEach(desc => {
                gsap.to(desc, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: desc,
                    scrub: true,
                },
                });
            });


            // spinner
            gsap.to(".spinner", {
                rotation: 270,
                scrollTrigger: {
                trigger:".spinner",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
                ease: "none",
                },

            });






            gsap.utils.toArray(".project_title").forEach(project_title => {
                var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project_title,
                    scrub: true,
                    start: "top 90%",
                    end: "top 35%",
                    markers: false,
                }
                });
                tl.from(project_title, {
                x: "100vw",
                });
            });

            gsap.utils.toArray(".project_line").forEach(project_line => {
                gsap.from(project_line, {
                x: "-100vw",
                scrollTrigger: {
                    trigger: project_line,
                    scrub: true,
                    start: "top 90%",
                    end: "top 35%",
                }
                });
            });
        
      });
      
    });
});




      



      // Scroll Pinning
      // const scrollFrame = gsap.utils.toArray('.project_scroll_frame');
      // gsap.utils.toArray(".project_pin_frame").forEach(frame => {
      //   scrollFrame.forEach(sFrame => {
      //     ScrollTrigger.create({
      //       trigger: frame,
      //       start:"top top",
      //       endTrigger: sFrame,
      //       end: "top top",
      //       scrub: true,
      //       pin: true,
      //       pinSpacing: false,
      //       markers: true,
      //
      //   })
      //
      //   });
      // });





    // let proxy = { skew: 0 },
    // skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    // clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
    //
    // ScrollTrigger.create({
    //   onUpdate: (self) => {
    //     let skew = clamp(self.getVelocity() / -300);
    //     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //       proxy.skew = skew;
    //       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    //     }
    //   }
    // });
    //
    // // make the right edge "stick" to the scroll bar. force3D: true improves performance
    // gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});


