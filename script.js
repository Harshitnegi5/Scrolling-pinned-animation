gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  endTrigger: ".whitespace",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const rotation = self.progress * 360;
    gsap.to(".revealer", { rotation });

    const progress = self.progress;
    const clipPath = `polygon(
        ${45 - 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${0 + 0 * progress}%,
        ${55 + 45 * progress}% ${100 - 0 * progress}%,
        ${45 - 45 * progress}% ${100 - 0 * progress}%
    )`;

    gsap.to(".revealer-1,.revealer-2", {
      clipPath: clipPath,
      ease: "none",
      duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  end: "top 50%",
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress;
    const left = 35 + 15 * progress;

    gsap.to(".revealer", {
      left: `${left}%`,
      ease: "none",
    //   duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".whitespace",
  start: "top 50%",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    const scale = 1 + 12 * self.progress;
    gsap.to(".revealer", {
      scale: scale,
      ease: "none",
      duration: 0,
    });
  },
});
