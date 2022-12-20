const visualTxt = document.querySelector(".visual-text-box h2");

let tag = "",
  fadeInEffect = `fadeInUp 400ms 0ms 1 both`,
  fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
  revealEffect = `revealOpacity 2500ms 1 both`;

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

const elMain = document.querySelector("#main"),
  cont1txtBox = document.querySelector(".content01-text-box"),
  cont2menu = document.querySelector(".content02-menu");

document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop;
  // value = window.pageYOffset / elItemCon.offsetTop + 1;
  // background and font color effect
  function scrollEvent(target, target2, effect) {
    if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
      target.style.animation = effect;
    }
  }
  function scrollEvents(target, target2, effect, num) {
    target.forEach((value, key) => {
      if (
        target2[key].offsetTop - window.innerHeight * 0.8 <
        window.pageYOffset
      ) {
        setInterval(() => {
          target[key].style.animation = effect;
        }, key * num);
      }
    });
  }
  function scrollEvents2(target, target2, effect, num) {
    target.forEach((value, key) => {
      if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
        setInterval(() => {
          target[key].style.animation = effect;
        }, key * num);
      }
    });
  }
  scrollEvent(cont1txtBox, cont1txtBox, fadeInEffect2);
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
    cont2menu.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
    cont2menu.style.backgroundColor = "black";
  }
});
// let idx = sessionStorage.idx || 0;

// $(".content02-menu a").eq(idx).addClass("menuOpened");
// $(".content02-menu li").click(function () {
//   let idx = $(this).index();
//   sessionStorage.idx = idx;
// });
