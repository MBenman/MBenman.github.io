
// const preloader = document.querySelector('.preloader');


// window.addEventListener('load', loaderAnim());

// var box1Width = document.getElementById("loadBox1").offsetWidth;
// var box2Width = document.getElementById("loadBox2").offsetWidth;
// console.log(box1Width);

// function loaderAnim() {
//     var tl = gsap.timeline();
//         tl.to("#loadBox1", {
//         x: "200px",
//         });
// }






      



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


