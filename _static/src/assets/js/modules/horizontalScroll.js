import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  const area = document.querySelector(".js-area");
  const wrap = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num = items.length;

  gsap.set(wrap, { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });

  //ここから追加
  gsap.to(items, {
    xPercent: -100 * (num - 1),
    ease: "none",
    scrollTrigger: {
      trigger: area,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      markers: true,
    },
  });
  //ここまで追加
});
