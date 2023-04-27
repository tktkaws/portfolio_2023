export default function clickToggleClass(){
  const target = document.getElementById("navbtn");
const body = document.getElementById("body");
const text = document.getElementById("navtext");

target.addEventListener(
  "click",
  () => {
    body.classList.toggle("nav-body");
  },
  false
);


}


