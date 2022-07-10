//  <!-- mobile menu btn animation -->
var menu = document.getElementById("mobile-menu");
var menuImg = document.getElementById("menuImg");
var closeMenuImg = document.getElementById("closeMenuImg");

menu.style.display = "block";
menu.style.marginLeft = "1000px";
menu.style.opacity = "1";
menuImg.style.display = "block";
closeMenuImg.style.display = "none";

function clickMenu() {
  if (menuImg.style.display === "block") {
    // btn animation
    menuImg.style.transform = "rotateZ(180deg)";
    menuImg.style.transition = "0.3s";
    // menu animation
    menu.style.marginLeft = "0";
    menu.style.opacity = "1";
    menu.style.transition = "0.5s";

    setTimeout(() => {
      menuImg.style.display = "none";
      closeMenuImg.style.display = "block";
      menu.style.display = "block";

      // untoggle animation
      menuImg.style.transform = "rotateY(0deg)";
      menuImg.style.width = "80px";
      menuImg.style.transition = "0.3s";
    }, 200);
  } else {
    // btn animation
    closeMenuImg.style.transform = "rotateZ(-180deg)";
    closeMenuImg.style.transition = "0.3s";
    // menu animation
    menu.style.marginLeft = "1000px";
    menu.style.transition = "0.4s";

    setTimeout(() => {
      menuImg.style.display = "block";
      closeMenuImg.style.display = "none";

      // untoggle animation
      closeMenuImg.style.transform = "rotateY(0deg)";
      closeMenuImg.style.width = "80px";
      closeMenuImg.style.transition = "0.3s";
    }, 200);
  }
}

// close mobile menu after btn click

function clickMobileMenuItem() {
  // btn animation
  closeMenuImg.style.transform = "rotateZ(-180deg)";
  closeMenuImg.style.transition = "0.3s";
  // menu animation
  menu.style.marginLeft = "1000px";
  menu.style.transition = "0.4s";

  setTimeout(() => {
    menuImg.style.display = "block";
    closeMenuImg.style.display = "none";

    // untoggle animation
    closeMenuImg.style.transform = "rotateY(0deg)";
    closeMenuImg.style.width = "80px";
    closeMenuImg.style.transition = "0.3s";
  }, 200);
}

// and change home background opacity on scroll
let quoteBackground = document.getElementById("quote-background");
let toTopBtnContainer = document.getElementById("toTopBtn-container");

window.onscroll = () => {
  // called when the window is scrolled.
  if (window.scrollY > 500) {
    toTopBtnContainer.style.top = "96vh";
    quoteBackground.style.opacity = "0.05";
  } else {
    toTopBtnContainer.style.top = "110vh";
    quoteBackground.style.opacity = "0.3";
  }
};

//  <!-- project's overview & story animation (containers and buttons) -->
var overviewBtn = document.getElementById("overview-btn");
var storyBtn = document.getElementById("story-btn");
var overviewContainer = document.getElementById("overview-container");
var storyContainer = document.getElementById("story-container");

function clickStoryBtn() {
  if ((overviewContainer.style.display = "flex")) {
    overviewContainer.style.display = "none";
    storyContainer.style.display = "flex";
    storyContainer.style.opacity = "0";

    overviewBtn.style.opacity = "0.5";
    storyBtn.style.opacity = "0.5";

    setTimeout(() => {
      storyContainer.style.transform = "rotateY(360deg)";
      overviewContainer.style.transform = "rotateY(-360deg)";

      storyBtn.style.borderTopColor = "#00ff00";
      overviewBtn.style.borderTopColor = "#ff0000";

      storyContainer.style.opacity = "1";
      overviewContainer.style.opacity = "0";

      storyContainer.style.opacity = "1";
      overviewContainer.style.opacity = "0";

      overviewBtn.style.opacity = "1";
      storyBtn.style.opacity = "1";

      overviewContainer.style.transition = "0.2s";
      storyContainer.style.transition = "0.2s";
    }, 200);
  }
}

function clickOverviewBtn() {
  if ((overviewContainer.style.display = "none")) {
    overviewContainer.style.display = "flex";
    storyContainer.style.display = "none";

    overviewBtn.style.opacity = "0.5";
    storyBtn.style.opacity = "0.5";

    setTimeout(() => {
      storyContainer.style.transform = "rotateY(-360deg)";
      overviewContainer.style.transform = "rotateY(360deg)";

      storyBtn.style.borderTopColor = "#ff0000";
      overviewBtn.style.borderTopColor = "#00ff00";

      storyContainer.style.opacity = "0";
      overviewContainer.style.opacity = "1";

      overviewBtn.style.opacity = "1";
      storyBtn.style.opacity = "1";

      overviewContainer.style.transition = "0.2s";
      storyContainer.style.transition = "0.2s";
    }, 200);
  }
}

// copy current project page link
let shareProjectBtn = document.getElementById("share-project-btn");
function copyCurrentURL() {
  navigator.clipboard.writeText(window.location.href);
  alert("Project link copied to clipboard");
}

// overview and story slider
let slideContainerList = document.getElementById(
  "slide-container-list"
).children;
let currentSlide = 0;

function clickSlideBtnNext() {
  if (currentSlide >= slideContainerList.length - 1) {
    currentSlide = -1;
  }
  [...slideContainerList].forEach((item) => (item.style.display = "none"));
  slideContainerList[++currentSlide].style.display = "inline";
}

function clickSlideBtnPrevious() {
  if (currentSlide <= 0) {
    currentSlide = slideContainerList.length;
  }
  [...slideContainerList].forEach((item) => (item.style.display = "none"));
  slideContainerList[--currentSlide].style.display = "inline";
}

// big gallery modal viewer
let gallery = document.getElementById("big-gallery-container").children;
let galleryContainer = document.getElementById("big-gallery-container");
let galleryArr = [...gallery];

let container = document.getElementById("big-gallery-modal-container");
let modal = document.getElementById("big-gallery-modal");
// let closeModal = document.getElementById("close-modal");

galleryArr.forEach((item) => {
  item.addEventListener("click", function handleClick() {
    if ((container.style.display = "none")) {
      container.style.display = "flex";
      // timer for the animation
      setTimeout(() => {
        modal.style.width = "100%";
      }, 10);

      let copy = item.cloneNode(true);
      modal.append(copy);
      copy.style.width = "60%";
    }
  });
});

// close modale viewer including animation
container.addEventListener("click", function handleClick() {
  modal.style.width = "0";
  // timer for the animation
  setTimeout(() => {
    container.style.display = "none";
    modal.replaceChildren();
  }, 150);
});
