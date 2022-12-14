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
  cont1txtBox = document.querySelector(".content01-text-box p"),
  cont2img = document.querySelector(".card-media img"),
  cont3h3 = document.querySelectorAll(".fadeInEffect01"),
  cont3items = document.querySelectorAll(".content03-img01"),
  cont4txt1 = document.querySelector(".content04-item01 .text-box01"),
  cont4txt2 = document.querySelector(".content04-item02 .text-box02"),
  cont4txt3 = document.querySelector(".content04-item03 .text-box01"),
  cont4txt4 = document.querySelector(".content04-item04 .text-box02"),
  cont4txt5 = document.querySelector(".content04-item05 .text-box01"),
  cont6item = document.querySelector(".content06-item01"),
  cont7item = document.querySelector(".content07-item01 .text-box01"),
  cont8item = document.querySelectorAll(".fadeInEffect02"),
  cont9items = document.querySelectorAll(".content09-swiper-active");

document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop;
  // value = window.pageYOffset / elItemCon.offsetTop + 1;
  // background and font color effect
  if (currentScrollValue > 700) {
    cont1txtBox.style.animation = fadeInEffect2;
  }
  if (currentScrollValue > 1130) {
    cont2img.style.animation = fadeInEffect2;
  }

  if (currentScrollValue > 1650) {
    cont3h3.forEach((value, key) => {
      setInterval(() => {
        cont3h3[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  if (currentScrollValue > 1800) {
    cont3items.forEach((value, key) => {
      setInterval(() => {
        cont3items[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }

  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }
  if (currentScrollValue > 2800) {
    cont4txt1.style.animation = revealEffect;
  }
  if (currentScrollValue > 3600) {
    cont4txt2.style.animation = revealEffect;
  }
  if (currentScrollValue > 4400) {
    cont4txt3.style.animation = revealEffect;
  }
  if (currentScrollValue > 5000) {
    cont4txt4.style.animation = revealEffect;
  }
  if (currentScrollValue > 5800) {
    cont4txt5.style.animation = revealEffect;
  }
  if (currentScrollValue > 7600) {
    cont6item.style.animation = fadeInEffect2;
  }
  if (currentScrollValue > 8800) {
    cont7item.style.animation = revealEffect;
  }
  if (currentScrollValue > 9500) {
    cont8item.forEach((value, key) => {
      setInterval(() => {
        cont8item[key].style.animation = revealEffect;
      }, key * 200);
    });
  }
  if (currentScrollValue > 9700) {
    cont9items.forEach((value, key) => {
      setInterval(() => {
        cont9items[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  // console.log(currentScrollValue);
});
