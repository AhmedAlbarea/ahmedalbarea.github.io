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



// Hide header and show (to top) btn 
// and change home background opacity on scroll
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("toTopBtn-container").style.top = "96vh";
    document.getElementById("quote-background").style.opacity = "0.05";
  } else {
    document.getElementById("toTopBtn-container").style.top = "110vh";
    document.getElementById("quote-background").style.opacity = "0.5";
  }
}



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