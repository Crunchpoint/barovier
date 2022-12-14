const visualTxt = document.querySelector(".visual-text-box h2");

let tag = "",
  fadeInEffect = `fadeInUp 400ms 0ms 1 both`;
//   fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
//   revealEffect = `revealOpacity 2500ms 1 both`;

function temp() {
  for (let i = 0; i < visualTxt.textContent.length; i++) {
    tag += `<span>${visualTxt.textContent[i]}</span>`;
  }
  visualTxt.innerHTML = tag;
}
temp();

const addBr = document.querySelectorAll(".visual-text-box span");
let num = -1;
let inter = setInterval(() => {
  if (num < addBr.length - 1) {
    num++;
  } else {
    clearInterval(inter);
  }
  addBr[num].style.animation += fadeInEffect;
}, 50);

const elMain = document.querySelector("#main");

document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop;
  // value = window.pageYOffset / elItemCon.offsetTop + 1;
  // background and font color effect
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }
});
