const visualTxt = document.querySelector(".visual-text-box h2");

let tag = "",
  fadeInEffect = `fadeInUp 400ms 0ms 1 both`,
  fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
  revealEffect = `revealOpacity 1000ms 1 both`;

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
  fadeEffect = document.querySelectorAll(".fadeInEffect"),
  cont2img = document.querySelector(".card-media img"),
  cont2Inner = document.querySelector(".content02-inner"),
  cont3Inner = document.querySelector(".content03-inner"),
  cont3fadeIn = document.querySelectorAll(".fadeInEffect01"),
  cont4txtBox = document.querySelectorAll(".cont4textBox"),
  cont7item = document.querySelector(".content07-item01 .text-box01"),
  cont8item = document.querySelectorAll(".fadeInEffect02"),
  cont9Inner = document.querySelector(".content09-inner"),
  cont9items = document.querySelectorAll(".content09-swiper-active");

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
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }
  scrollEvents(fadeEffect, fadeEffect, fadeInEffect2);
  scrollEvent(cont2img, cont2Inner, fadeInEffect2);
  scrollEvents2(cont3fadeIn, cont3Inner, fadeInEffect2, 200);
  scrollEvents(cont4txtBox, cont4txtBox, revealEffect);
  scrollEvent(cont7item, cont7item, revealEffect);
  scrollEvents(cont8item, cont8item, fadeInEffect2, 200);
  scrollEvents2(cont9items, cont9Inner, fadeInEffect2, 200);
});

window.addEventListener("load", () => {
  let sipwerItems = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
  });
});
