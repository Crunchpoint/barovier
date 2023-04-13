// main javascript

// wrap every single word with span tag
let fadeInEffect = `fadeInUp 400ms 0ms 1 both`,
  fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
  revealEffect = `revealOpacity 1000ms 1 both`,
  clickIdx = 0,
  idx = 0,
  idx2 = 1,
  innerWidth = window.innerWidth;

const visualTxtAll = document.querySelectorAll(".wrapSpanH2");

function wordSpan() {
  visualTxtAll.forEach((value, key) => {
    let tag = "";
    for (let i = 0; i < visualTxtAll[key].textContent.length; i++) {
      tag += `<span>${visualTxtAll[key].textContent[i]}</span>`;
    }
    visualTxtAll[key].innerHTML = tag;
  });
}

wordSpan();

const spanTxt1 = document.querySelectorAll(".spanTxt1 span"),
  spanTxt2 = document.querySelectorAll(".spanTxt2 span"),
  spanTxt3 = document.querySelectorAll(".spanTxt3 span"),
  spanTxt4 = document.querySelectorAll(".spanTxt4 span"),
  spanTxt5 = document.querySelectorAll(".spanTxt5 span"),
  spanTxt6 = document.querySelectorAll(".spanTxt6 span"),
  aniSpan = document.querySelectorAll(".visual-text-box span"),
  visualP = document.querySelectorAll(".visual-text-box p:nth-of-type(1)"),
  visualBtn = document.querySelectorAll(".visual-text-box a"),
  swiper = document.querySelector(".swiper"),
  indicator = document.querySelectorAll(".pagination li");
// spanTxt# array..
let spanArray = [spanTxt1, spanTxt2, spanTxt3, spanTxt4, spanTxt5, spanTxt6];
// pick 15th span tag
// init animation
function init() {
  aniSpan.forEach((el) => {
    el.style.animation = "";
  });
  visualP.forEach((el) => {
    el.style.animation = "";
  });
  visualBtn.forEach((el) => {
    el.style.animation = "";
  });
  indicator.forEach((el) => {
    el.style = "";
  });
}
function spanEffect(value) {
  // run init and clear previous effects
  init();
  let num = -1;
  // put delay on each word
  let inter = setInterval(() => {
    if (num < value.length - 1) {
      num++;
    } else {
      clearInterval(inter);
    }
    value[num].style.animation += fadeInEffect;
  }, 50);

  visualP.forEach(() => {
    visualP[idx].style.animation = `fadeInUp 400ms ${value.length * 60}ms 1 both`;
  });
  visualBtn.forEach(() => {
    visualBtn[idx].style.animation = `fadeInUp 400ms ${value.length * 65}ms 1 both`;
  });
  swiper.style.animation = `fadeInUp 400ms ${value.length * 70}ms 1 both`;
  indicator.forEach(() => {
    indicator[clickIdx].style.backgroundColor = `white`;
  });
}
// need to be revised
spanTxt1[15].innerHTML = `<br>`;
spanTxt4[19].innerHTML = `<br>`;
spanTxt5[12].innerHTML = `<br>`;
spanTxt6[19].innerHTML = `<br>`;
const elMain = document.querySelector("#main"),
  fadeEffect = document.querySelectorAll(".fadeInEffect01"),
  elItemImg = document.querySelector(".content01-container img"),
  elItemCon = document.querySelector(".content01-img01 picture"),
  cont2txtBox = document.querySelectorAll(".cont2textBox"),
  cont3txt = document.querySelector(".content03-text"),
  cont3b1 = document.querySelector(".content03-text a"),
  cont4img1 = document.querySelector(".content04-bg img:nth-child(2)"),
  cont5Wrapper = document.querySelector(".contents-wrapper"),
  cont5Item = document.querySelectorAll(".contentSlider");
// scroll event
function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
// apply throttle
let inter1;
let inter2;
let inter3;
document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop,
    value = window.pageYOffset / elItemCon.offsetTop + 1;

  function scrollEvent(target, target2, effect) {
    if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
      target.style.animation = effect;
    }
  }

  function scrollEvents(target, target2, effect, num) {
    target.forEach((value, key) => {
      if (target2[key].offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
        let delay = key * num;
        // create a function that sets the animation effect and logs a message
        const animationFunc = () => {
          value.style.animation = effect;
        };
        // use setTimeout to delay the animation effect by a certain amount of time
        setTimeout(animationFunc, delay);
      }
    });
  }
  function scrollEvents2(target, target2, effect, num) {
    target.forEach((value, key) => {
      if (target2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
        let delay = key * num;

        // create a function that sets the animation effect and logs a message
        const animationFunc = () => {
          target[key].style.animation = effect;
        };

        // use setTimeout to delay the animation effect by a certain amount of time
        setTimeout(animationFunc, delay);
      }
    });
  }

  // console.log(window.scrollY);
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }

  elItemImg.style.transform = `scale(${value})`;

  if (currentScrollValue > 4200) {
    cont4img1.style.transform = `scale(1)`;
  }

  scrollEvents(fadeEffect, fadeEffect, fadeInEffect2);
  scrollEvents(cont2txtBox, cont2txtBox, revealEffect, 200);
  scrollEvent(cont3txt, cont3txt, fadeInEffect2);
  scrollEvent(cont3b1, cont3b1, fadeInEffect2);
  scrollEvents2(cont5Item, cont5Wrapper, fadeInEffect2, 200);
});

// mouse follower
const visualAll = document.querySelectorAll(".visual_container"),
  follower = document.querySelector(".follower"),
  arrow = document.querySelector(".arrow");

// mouse move event
window.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX,
    mouseY = e.clientY;
  follower.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0px)`;
  // follower.style = `transform: translate3d(${mouseY} + "px"`;
  if (e.clientX < innerWidth / 2) {
    arrow.style = `transform: translateX(2px) rotate(-225deg);`;
  } else if (e.clientX > innerWidth / 2) {
    arrow.style = `transform: translateX(-2px) rotate(-45deg);`;
  }
});

// resize event
window.addEventListener("resize", function responsiveWidth() {
  innerWidth = window.innerWidth;
  // console.log("resized width is " + innerWidth);
  baseWidth(innerWidth);
});
// default value for visual cards
function baseWidth() {
  visualAll.forEach((value, key) => {
    visualAll[idx].style.transform = `translate3d(calc(-${innerWidth * idx}px + 0%), 0px, 0px)`;
    visualAll[key].style = `transform: translate3d(calc(-${innerWidth * key}px + 100%), 0px, 0px); width: ${innerWidth}px;`;
  });
}
baseWidth();
// function next card effect
function nextImg() {
  visualAll[idx].style = `transform: translate3d(calc(-${innerWidth * idx}px + 0%), 0px, -500px); transition-duration: 700ms`;
  visualAll[idx].style.opacity = `0`;
  idx++;
  visualAll[idx].style = `transform: translate3d(calc(-${innerWidth * idx2}px + 0%), 0px, 0px); transition-duration: 700ms`;
  idx2++;
  console.log("current window width is  " + innerWidth);
}
// function prev card effect
function preImg() {
  idx2--;
  visualAll[idx].style = `transform: translate3d(calc(-${innerWidth * idx2}px + 100%), 0px, 0px); transition-duration: 700ms`;
  idx--;
  visualAll[idx].style = `transform: translate3d(calc(-${innerWidth * idx}px + 0%), 0px, 0px); transition-duration: 700ms`;
  visualAll[idx].style.opacity = `1`;
  console.log("current window width is  " + innerWidth);
}
// click event :: move card and word effect
const visual = document.querySelector(".visual");
// run span effect for the first page
spanEffect(spanArray[0]);

visual.addEventListener("click", (e) => {
  if (e.clientX > innerWidth / 2 && idx < visualAll.length - 1) {
    console.log("next");
    nextImg();
    clickIdx++;
    setTimeout(() => {
      spanEffect(spanArray[clickIdx]);
    }, 500);
  } else if (e.clientX < innerWidth / 2 && idx > 0) {
    console.log("prev");
    preImg();
    clickIdx--;
    setTimeout(() => {
      spanEffect(spanArray[clickIdx]);
    }, 500);
  }
});

window.addEventListener("load", () => {
  let sipwerItems = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
  });
});
