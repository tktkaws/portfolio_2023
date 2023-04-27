import { gsap } from "gsap";

// ローディングアニメーションを実行する関数
export function runLoadingAnimation() {
  const logo = document.getElementsByClassName("l-main__title"),
    header = document.getElementsByClassName("l-header"),
    footer = document.getElementsByClassName("l-footer"),
    main = document.getElementsByClassName("l-main__loop");

  const elements = [logo, main];
  // アニメーションの実行時間
  const duration = 0.8;

  // localStorageに保存されたフラグをチェックし、初回表示の場合はローディングアニメーションを実行する
  const loadingAnimationDisplayed = localStorage.getItem(
    "loadingAnimationDisplayed"
  );
  if (!loadingAnimationDisplayed) {
    // 要素を順番に表示するアニメーション
    gsap.set(elements, { opacity: 0 });
    gsap.to(elements, {
      duration,
      delay: duration,
      opacity: 1,
      stagger: duration,
      onComplete: () => {
        console.log("Loading animation completed");
      },
    });

    // 表示が完了したら、localStorageにフラグをセットする
    localStorage.setItem("loadingAnimationDisplayed", true);
  } else {
    console.log("loadingAnimationDisplayed");
  }
}
