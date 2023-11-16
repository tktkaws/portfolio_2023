import Splide from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";

export function initSlider() {
  const target01 = document.getElementById("slider01");
  console.log("target01", target01);
  if (target01) {
    const slider01 = new Splide("#slider01", {
      type: "loop",
      perPage: 1,
      heightRatio: 0.56,
      pagination: false,
      autoplay: "auto",
      interval: 3000,
      speed: 1000,
      grid: {
        dimensions: [
          [1, 1],
          [1, 4],
        ],
        gap: {
          row: "1em",
          col: "1em",
        },
      },
    });

    slider01.mount({ Grid });
  } else {
    console.log("target01がない");
  }

  const target02 = document.getElementById("slider02");
  console.log("target02", target02);
  if (target02) {
    const slider02 = new Splide("#slider02", {
      type: "loop",
      perPage: 1,
      heightRatio: 0.56,
      pagination: false,
      autoplay: "auto",
      interval: 3000,
      speed: 1000,
      grid: {
        dimensions: [
          [1, 3],
          [1, 1],
          [1, 3],
        ],
        gap: {
          row: "1em",
          col: "1em",
        },
      },
    });

    slider02.mount({ Grid });
  } else {
    console.log("target02がない");
  }

  const target03 = document.getElementById("slider03");
  console.log("target03", target03);
  if (target03) {
    const slider03 = new Splide("#slider03", {
      type: "loop",
      perPage: 1,
      heightRatio: 0.56,
      pagination: false,
      autoplay: "auto",
      interval: 3000,
      speed: 1000,
      grid: {
        dimensions: [
          [2, 2],
          [1, 1],
          [1, 3],
        ],
        gap: {
          row: "1em",
          col: "1em",
        },
      },
    });

    slider03.mount({ Grid });
  } else {
    console.log("target03がない");
  }

  const target04 = document.getElementById("slider04");
  console.log("target04", target04);
  if (target04) {
    const slider04 = new Splide("#slider04", {
      type: "loop",
      perPage: 1,
      heightRatio: 0.56,
      pagination: false,
      autoplay: "auto",
      interval: 3000,
      speed: 1000,
      grid: {
        dimensions: [
          [1, 1],
          [2, 2],
          [1, 3],
        ],
        gap: {
          row: "1em",
          col: "1em",
        },
      },
    });

    slider04.mount({ Grid });
  } else {
    console.log("target04がない");
  }
}
