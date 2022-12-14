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
  cont2txtBox = document.querySelector(".content02-item01 p"),
  cont2txtBox2 = document.querySelector(".content02-item02 p"),
  cont3txtBox = document.querySelector(".content03-text-box p"),
  cont4h2 = document.querySelector(".content04-inner h2"),
  cont4items = document.querySelectorAll(".content04-swiper-active");

document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop;
  // value = window.pageYOffset / elItemCon.offsetTop + 1;
  // background and font color effect
  if (currentScrollValue > 500) {
    cont1txtBox.style.animation = revealEffect;
  }
  if (currentScrollValue > 850) {
    cont2txtBox.style.animation = revealEffect;
  }

  if (currentScrollValue > 1500) {
    cont2txtBox2.style.animation = revealEffect;
  }

  if (currentScrollValue > 1900) {
    cont3txtBox.style.animation = revealEffect;
  }

  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }

  if (currentScrollValue > 2100) {
    cont4h2.style.animation = fadeInEffect2;
  }

  if (currentScrollValue > 2300) {
    cont4items.forEach((value, key) => {
      setInterval(() => {
        cont4items[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }

  // console.log(currentScrollValue);
});
