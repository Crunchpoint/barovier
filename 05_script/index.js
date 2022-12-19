// main javascript

// wrap every single word with span tag
let fadeInEffect = `fadeInUp 400ms 0ms 1 both`,
  fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
  revealEffect = `revealOpacity 2500ms 1 both`,
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
    visualP[idx].style.animation = `fadeInUp 400ms ${
      value.length * 60
    }ms 1 both`;
  });
  visualBtn.forEach(() => {
    visualBtn[idx].style.animation = `fadeInUp 400ms ${
      value.length * 65
    }ms 1 both`;
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

// scroll event

// window.addEventListener("scroll", (key) => {
//   function temp() {
//     elFigure.forEach((value, key) => {
//       if (
//         elFigure[key].offsetTop - window.innerHeight * 0.8 <
//         window.pageYOffset
//       ) {
//         elFigure[key].classList.add("active");
//       }
//     });
//   }
//   temp(key);
// });
const elMain = document.querySelector("#main"),
  cont1txtBox = document.querySelectorAll(".fadeInEffect01"),
  elItemImg = document.querySelector(".content01-container img"),
  elItemCon = document.querySelector(".content01-img01 picture"),
  cont3txt = document.querySelector(".content03-text"),
  cont3b1 = document.querySelector(".content03-text a"),
  cont4img1 = document.querySelector(".content04-bg img:nth-child(2)"),
  cont5txtBox = document.querySelectorAll(".fadeInEffect02"),
  cont5Item = document.querySelectorAll(".contentSlider");
// scroll event
document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop,
    value = window.pageYOffset / elItemCon.offsetTop + 1;
  // console.log("currentScrollValue is" + currentScrollValue);
  // text box fade in effect
  if (currentScrollValue > 700) {
    cont1txtBox.forEach((value, key) => {
      setInterval(() => {
        cont1txtBox[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  // background and font color effects
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }
  // image scaling
  elItemImg.style.transform = `scale(${value})`;
  // text box fade in
  if (currentScrollValue > 2900) {
    cont3txt.style.animation = revealEffect;
  }
  if (currentScrollValue > 3000) {
    cont3b1.style.animation = fadeInEffect2;
  }
  if (currentScrollValue > 4200) {
    cont4img1.style.transform = `scale(1)`;
  }
  if (currentScrollValue > 5100) {
    cont5txtBox.forEach((value, key) => {
      setInterval(() => {
        cont5txtBox[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  if (currentScrollValue > 5200) {
    cont5Item.forEach((value, key) => {
      setInterval(() => {
        cont5Item[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  // console.log(currentScrollValue);
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
  console.log("resized width is " + innerWidth);
  baseWidth(innerWidth);
});
// default value for visual cards
function baseWidth() {
  visualAll.forEach((value, key) => {
    visualAll[idx].style.transform = `translate3d(calc(-${
      innerWidth * idx
    }px + 0%), 0px, 0px)`;
    visualAll[key].style = `transform: translate3d(calc(-${
      innerWidth * key
    }px + 100%), 0px, 0px); width: ${innerWidth}px;`;
  });
}
baseWidth();
// function next card effect
function nextImg() {
  visualAll[idx].style = `transform: translate3d(calc(-${
    innerWidth * idx
  }px + 0%), 0px, -500px); transition-duration: 700ms`;
  visualAll[idx].style.opacity = `0`;
  idx++;
  visualAll[idx].style = `transform: translate3d(calc(-${
    innerWidth * idx2
  }px + 0%), 0px, 0px); transition-duration: 700ms`;
  idx2++;
  console.log("current window width is  " + innerWidth);
}
// function prev card effect
function preImg() {
  idx2--;
  visualAll[idx].style = `transform: translate3d(calc(-${
    innerWidth * idx2
  }px + 100%), 0px, 0px); transition-duration: 700ms`;
  idx--;
  visualAll[idx].style = `transform: translate3d(calc(-${
    innerWidth * idx
  }px + 0%), 0px, 0px); transition-duration: 700ms`;
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

// revising...
const cont5slider = document.querySelector(".content05-img-swiper"),
  innerSlider = document.querySelector(".contents-wrapper");

/* keep track my mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner cont5slider */
let cursorXSpace;

cont5slider.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - innerSlider.offsetLeft;
  cont5slider.style.cursor = "grabbing";
});

cont5slider.addEventListener("mouseup", () => {
  cont5slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

cont5slider.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  innerSlider.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  // need to be revised below
  // const container_rect = cont5slider.getBoundingClientRect();
  // const cards_rect = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = 0;
  } else if (parseInt(innerSlider.style.left) < -2000) {
    innerSlider.style.left = `-${2000}px`;
  }
}

// const slider = document.querySelector('.contents-wrapper');

// let isDragging = false;
// let currentX;
// let startX;
// let distance = 0;

// slider.addEventListener('mousedown', e => {
//   startX = e.pageX - slider.offsetLeft;
//   isDragging = true;
// });

// slider.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// slider.addEventListener('mousemove', e => {
//   if (isDragging) {
//     e.preventDefault();
//     currentX = e.pageX - slider.offsetLeft;
//     distance = currentX - startX;
//     // Update the position of the slider based on the distance the mouse has moved
//     slider.style.transform = `translateX(${distance}px)`;
//   }
// });
