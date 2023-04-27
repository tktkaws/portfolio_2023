import clickToggleClass from "./modules/clickToggleClass";
import barba from "@barba/core";
import { gsap, Power4 } from "gsap";
import {
  delay,
  leaveAnimationReveal,
  enterAnimationReveal,
} from "./modules/transitions";
import { navClear } from "./modules/navClear";
import { mouseStalker } from "./modules/mouseStalker";
import replaceHeadTags from "./modules/replaceHeadTags";
import { runLoadingAnimation } from "./modules/loadingAnimation";
import { hoverAddClass } from "./modules/hoverAddClass";

clickToggleClass();
// mouseStalker();
// hoverAddClass();

barba.init({
  sync: true,
  transitions: [
    {
      name: "default-transition",
      async leave(data) {
        const done = this.async();
        leaveAnimationReveal();
        done();
      },
      beforeEnter({ next }) {
        window.scrollTo(0, 0);
        replaceHeadTags(next);
      },
      async enter(data) {
        await delay(400);
        enterAnimationReveal();
        navClear();
      },
    },
  ],
  views: [
    {
      namespace: "home",
      beforeEnter(data) {},
      afterLeave(data) {},
    },
    {
      namespace: "works",
      beforeEnter(data) {},
      afterLeave() {},
    },
  ],
});

barba.hooks.after(() => {
  // hoverAddClass();
  // mouseStalker();
  // Googleアナリティクスに情報を送る
  ga("set", "page", window.location.pathname);
  ga("send", "pageview");
});

window.onload = () => {
  runLoadingAnimation();
};
