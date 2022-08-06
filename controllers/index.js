// select query
const selectQuery = (id) => {
  return document.querySelector(id);
};

// style
const styleQuery = (id, marginLeft = "320px", width = "100%") => {
  const selector = document.querySelector(id);
  selector.style.marginLeft = marginLeft;
  selector.style.width = width;
  selector.style.transition = "all .5s";
};

// header scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// animation scroll
function scrollAnimation() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    console.log({ windowHeight });
    var elementTop = reveals[i].getBoundingClientRect().top;
    console.log({ elementTop });
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    // } else {
    //   reveals[i].classList.remove("active");
    // }
  }
}

window.addEventListener("scroll", scrollAnimation);
// To check the scroll position on page load
scrollAnimation();

// open/close menu
const menuOpen = selectQuery(".menu-bar-icon");
const menuClose = selectQuery(".menu-bar-icon-close");
const body = selectQuery("body");
const headerMenu = selectQuery(".header");
menuOpen.onclick = function () {
  headerMenu.classList.add("header-menu");
  styleQuery(".information");
  styleQuery(".about-us");
  styleQuery(".course");
  styleQuery(".footer");
};
menuClose.onclick = function () {
  headerMenu.classList.remove("header-menu");
  styleQuery(".information", "0px");
  styleQuery(".about-us", "0px");
  styleQuery(".course", "0px");
  styleQuery(".footer", "0px");
};

// validation
selectQuery("#btnSub").onclick = function (e) {
  e.preventDefault();
  let valid = true;
  valid &=
    kiemTraRong("#txtName", "#error_name") &
    kiemTraRong("#txtEmail", "#error_email");
  if (!valid) {
    return;
  }
  valid = kiemTraEmail("#txtEmail", ".error_email_valid");
  if (!valid) {
    return;
  }
};

// validation empty
function kiemTraRong(id, selectorError) {
  const value = selectQuery(id).value;
  if (value.trim() === "") {
    document.querySelector(selectorError).innerHTML = "The field is required.";
    return false;
  } else {
    selectQuery(selectorError).innerHTML = "";
    return true;
  }
}
function kiemTraEmail(id, selectorError) {
  const value = selectQuery(id).value;
  var regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    " The e-mail address entered is invalid.";
  return false;
}
