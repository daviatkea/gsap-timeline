gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const p = section.querySelectorAll("p");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% 50%",
        end: "+=200",
        scrub: true,
        pin: true,
        markers: true,
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
});
