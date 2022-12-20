// used Jquery for include header and footer in to html, but it has issue with svg..
// $("body").prepend("<header id='header'>");
// $("body").append("<div id='pre-footer'>");
// $("body").append("<footer id='footer'>");

// $("header").load("./inc.html header", head);
// $("#pre-footer").load("./inc.html #pre-footer");
// $("footer").load("./inc.html footer");

fetch("./06_xml/header.xml")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    let header = document.createElement("header");
    header.setAttribute("id", "header");
    // header.id = 'header';
    document.body.prepend(header);
    document.querySelector("header").innerHTML = data;
    headerJs(data.header);
  });

fetch("./06_xml/preFooter.xml")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    let preFooter = document.createElement("div");
    preFooter.setAttribute("id", "preFooter");
    // header.id = 'header';
    document.body.append(preFooter);
    document.querySelector("#preFooter").innerHTML = data;
    preFooterJs(data.preFooter);
  });

fetch("./06_xml/footer.xml")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    let footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    document.body.append(footer);
    document.querySelector("footer").innerHTML = data;

    footerJs(data.footer);
  });

// header Javascript
function headerJs() {
  const smLogo = document.querySelector(".sml-logo svg"),
    lgLogo = document.querySelector(".logo svg"),
    headerBg = document.querySelector(".header-content01"),
    headerColor = document.querySelectorAll(".colorSwitch"),
    burgerBtn = document.querySelectorAll(".burger-menu span"),
    elBurBtn = document.querySelector(".burger-menu"),
    elGnb = document.querySelector(".gnb"),
    elSrcColor = document.querySelector(".search-btn svg"),
    elSrcBtn = document.querySelector(".search-btn"),
    elSrcAtv = document.querySelector(".search-active"),
    elSrcTxt = document.querySelector(".search-active-bottom input"),
    elSrcClose = document.querySelector(".search-active-top span"),
    typo = document.querySelector("#typo");

  function burger() {
    for (let i = 0; i < headerColor.length; i++) {
      headerColor[i].style = "none";
    }
    elGnb.classList.toggle("burger-open");
    elBurBtn.classList.toggle("burger-open");
    typo.classList.toggle("burger-open");
    elSrcColor.classList.toggle("burger-open");
  }
  // burger button event
  elBurBtn.onclick = function () {
    burger();
  };
  // search onlclick event

  elSrcBtn.onclick = function () {
    elSrcAtv.classList.add("search-open");
    typo.classList.add("burger-open");
    elSrcTxt.classList.add("search-open");
    elSrcColor.classList.add("burger-open");
    for (let i = 0; i < headerColor.length; i++) {
      headerColor[i].style = "none";
    }
    if (!elGnb && elBurBtn && typo && elSrcColor) {
      elGnb.classList.remove("burger-open");
      elBurBtn.classList.remove("burger-open");
      typo.classList.remove("burger-open");
      elSrcColor.classList.remove("burger-open");
    }
  };
  // search onclick close
  elSrcClose.onclick = function () {
    elSrcAtv.classList.remove("search-open");
    typo.classList.remove("burger-open");
    elSrcTxt.classList.remove("search-open");
    elSrcColor.classList.remove("burger-open");
  };

  let idx = sessionStorage.idx || 5;

  $(".gnb-list a").eq(idx).addClass("menuOpened");
  $(".gnb-list li").click(function () {
    let idx = $(this).index();
    sessionStorage.idx = idx;
  });
  $("#logo").click(function () {
    idx = 5;
    sessionStorage.idx = idx;
  });
  $(".sml-logo").click(function () {
    idx = 5;
    sessionStorage.idx = idx;
  });
  // header menu focus
  // scroll event
  document.addEventListener("scroll", () => {
    let currentScrollValue = document.documentElement.scrollTop;
    // logo scroll event
    // console.log(headerColor);

    if (currentScrollValue > 150) {
      smLogo.style.transform = "translateY(0px)";
      lgLogo.style.transform = "translateY(100px)";
      headerBg.style.backgroundColor = "white";
      headerColor[0].style = "fill: black";
      for (let i = 0; i < headerColor.length; i++) {
        headerColor[i].style.color = "black";
      }
      for (let i = 0; i < burgerBtn.length; i++) {
        burgerBtn[i].style.backgroundColor = "black";
      }
    } else if (currentScrollValue < 150) {
      smLogo.style.transform = "translateY(-50px)";
      lgLogo.style.transform = "translateY(0px)";
      headerBg.style.backgroundColor = "transparent";
      headerColor[0].style = "fill: white";
      for (let i = 0; i < headerColor.length; i++) {
        headerColor[i].style.color = "white";
      }
      for (let i = 0; i < burgerBtn.length; i++) {
        burgerBtn[i].style.backgroundColor = "white";
      }
    }
  });
}

// let idx = localStorage.idx || 0;
// const gnbOpenLi = document.querySelectorAll(".gnb li"),
//   gnbOpenA = document.querySelectorAll(".gnb a");

// gnbOpenLi.onclick = (value, key) => {
//   gnbOpenA[key].classList.add("menuOpened");
//   localStorage.idx = idx;
// };
// }
// preFooter Javascript
function preFooterJs() {
  const elMail = document.querySelector(".form1 input:nth-child(1)"),
    elSubmit = document.querySelector(".form1 input:nth-child(2)");

  elSubmit.addEventListener("click", () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (elMail.value.match(validRegex)) {
      alert("Thanks for subscribing");
    } else {
      alert("Please enter valid email address!");
    }
  });
}

// footer Javascript
function footerJs() {}
