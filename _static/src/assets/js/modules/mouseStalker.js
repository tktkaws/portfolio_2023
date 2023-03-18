import { gsap } from "gsap";

const cursor = document.getElementById("js-cursor-img"),
  follower = document.getElementById("js-chaser-img"),
  link = document.getElementsByClassName("link"),
  pos = { x: 0, y: 0 }, // カーソル要素の座標
  mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
  speed = 0.5; // 0.01〜1 数値が大きほど早い

// カーソルの座標を設定する
const cursorSetX = gsap.quickSetter(cursor, "x", "px");
const cursorSetY = gsap.quickSetter(cursor, "y", "px");

// 遅延するカーソルの座標を設定する
const followerSetX = gsap.quickSetter(follower, "x", "px");
const followerSetY = gsap.quickSetter(follower, "y", "px");

// マウスカーソル座標を取得する
document.addEventListener("mousemove", function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// レンダリングする
gsap.ticker.add(function () {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  cursorSetX(pos.x);
  cursorSetY(pos.y);
  followerSetX(pos.x);
  followerSetY(pos.y);
});

const targetIds = [
  "js-target-01",
  "js-target-02",
  "js-target-03",
  "js-target-04",
  "js-target-05",
  "js-target-06",
  "js-target-07",
  "js-target-08",
];
const cursorIds = [
  "js-cursor-img01",
  "js-cursor-img02",
  "js-cursor-img03",
  "js-cursor-img04",
  "js-cursor-img01",
  "js-cursor-img02",
  "js-cursor-img03",
  "js-cursor-img04",
];

const targetList = targetIds.map((id) => document.getElementById(id));
const cursorList = cursorIds.map((id) => document.getElementById(id));

targetList.forEach((target, index) => {
  target.addEventListener("mouseenter", () => {
    cursor.classList.add("is-active");
    follower.classList.add("is-active");
    cursorList[index].classList.add("is-active");
  });

  target.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-active");
    follower.classList.remove("is-active");
    cursorList[index].classList.remove("is-active");
  });
});
