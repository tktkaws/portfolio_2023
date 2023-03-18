import Splide from "@splidejs/splide";

// const splide = new Splide(".splide", {
//   type: "loop",
//   perPage: 1,
// });

// splide.mount();

const target = ".article";
const options = {
  type: "loop",
  autoplay: true,
  interval: 8000,
  speed: 1000,
  pauseOnFocus: false,
  // padding: "20%",
  autoHeight: true,
  mediaQuery: "min",
  perPage: 1,
  gap: 24,
  // fixedWidth: "60%",
  fixedWidth: 400,
  fixedHeight: 800,
  heightRatio: 2,
  breakpoints: {
    600: {
      fixedWidth: 200,
      fixedHeight: 400,
    },
    1025: {
      // fixedWidth: 400,
      fixedWidth: "45vh",
      // fixedHeight: 800,
      fixedHeight: "90vh",
      gap: 48,
      gap: "5vh",
    },
  },
};
const mySplide = new Splide(target, options);
mySplide.mount();

// const heroTarget = ".hero";
// const target_options = {
//   type: "fade",
//   rewind: true,
//   autoplay: true,
//   arrows: false,
//   interval: 7000,
//   speed: 2000,
// };

// const heroSplide = new Splide(heroTarget, target_options);
// heroSplide.mount();
