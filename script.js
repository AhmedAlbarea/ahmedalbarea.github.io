

// To scroll to section on home page when user open it from another page by nav buttons
let pageUrl = window.location.href;

if (pageUrl.includes("#/work")) {
  setTimeout(() => {
    location.href = "#work";
  }, 500);
}

if (pageUrl.includes("#/about")) {
  setTimeout(() => {
    location.href = "#about";
  }, 500);
}

if (pageUrl.includes("#/contact")) {
  setTimeout(() => {
    location.href = "#contact";
  }, 500);
}



//  to change home nav button colors on scroll according to sections
let title = document.title;

if (title !== "Ahmed Al-barea portfolio") {
  //  if not on home page, highlight only work button
  document.getElementById("home-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
  document.getElementById("work-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00"; // active color
  document.getElementById("contact-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
  document.getElementById("about-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
  // mobile
  document.getElementById("mobile-home-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
  document.getElementById("mobile-work-btn").style.boxShadow = "1px 2px 2px #00ff00"; // active color
  document.getElementById("mobile-contact-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
  document.getElementById("mobile-about-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
}

if (title == "Ahmed Al-barea portfolio") {

  // home button default color onload
  document.getElementById("home-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00";
  // mobile
  document.getElementById("mobile-home-btn").style.boxShadow = "1px 2px 2px #00ff00";

  // sections 
  let homeSect = document.getElementById("home-section");
  let workSect = document.getElementById("work-section");
  let aboutSect = document.getElementById("about-section");
  let contactSect = document.getElementById("contact-section");

  // fixed div for onscrolling detection
  let onscrolldiv = document.getElementById("onscrolldiv");


  window.addEventListener("scroll", scrollForNav);
  function scrollForNav() {

    // onscrolling div top and bottom 
    let onscrolldivBottom = onscrolldiv.getBoundingClientRect().bottom;

    // elements tops and bottoms
    let homeTop = homeSect.getBoundingClientRect().top;
    let homeBottom = homeSect.getBoundingClientRect().bottom;

    let workTop = workSect.getBoundingClientRect().top;
    let workBottom = workSect.getBoundingClientRect().bottom;

    let contactTop = contactSect.getBoundingClientRect().top;
    let contactBottom = contactSect.getBoundingClientRect().bottom;

    let aboutTop = aboutSect.getBoundingClientRect().top;
    let aboutBottom = aboutSect.getBoundingClientRect().bottom;



    // distance between sections tops and onscroll div bottom

    // home
    let homeTop_ScrolldivBottom = homeTop - onscrolldivBottom;
    let homeBottom_ScrolldivBottom = homeBottom - onscrolldivBottom;
    // work
    let workTop_ScrolldivBottom = workTop - onscrolldivBottom;
    let workBottom_ScrolldivBottom = workBottom - onscrolldivBottom;
    // about
    let aboutTop_ScrolldivBottom = aboutTop - onscrolldivBottom;
    let aboutBottom_ScrolldivBottom = aboutBottom - onscrolldivBottom;
    // contact
    let contactTop_ScrolldivBottom = contactTop - onscrolldivBottom;
    let contactBottom_ScrolldivBottom = contactBottom - onscrolldivBottom;



    //  the effect on scroll with if conditions 

    // home button *****************************************************
    if (homeTop_ScrolldivBottom <= 0) {
      document.getElementById("home-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00"; // active color
      document.getElementById("mobile-home-btn").style.boxShadow = "1px 2px 2px #00ff00"; // active color
    }
    if (homeTop_ScrolldivBottom >= 0) {
      document.getElementById("home-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-home-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    if (homeBottom_ScrolldivBottom <= 0) {
      document.getElementById("home-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-home-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    // work button *****************************************************
    if (workTop_ScrolldivBottom <= 0) {
      document.getElementById("work-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00"; // active color
      document.getElementById("mobile-work-btn").style.boxShadow = "1px 2px 2px #00ff00"; // active color
    }
    if (workTop_ScrolldivBottom >= 0) {
      document.getElementById("work-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-work-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    if (workBottom_ScrolldivBottom <= 0) {
      document.getElementById("work-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-work-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    // about button *****************************************************
    if (aboutTop_ScrolldivBottom <= 0) {
      document.getElementById("about-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00"; // active color
      document.getElementById("mobile-about-btn").style.boxShadow = "1px 2px 2px #00ff00"; // active color
    }
    if (aboutTop_ScrolldivBottom >= 0) {
      document.getElementById("about-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-about-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    if (aboutBottom_ScrolldivBottom <= 0) {
      document.getElementById("about-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-about-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    // contact button *****************************************************
    if (contactTop_ScrolldivBottom <= 0) {
      document.getElementById("contact-btn-desktop").style.boxShadow = "1px 2px 2px #00ff00"; // active color
      document.getElementById("mobile-contact-btn").style.boxShadow = "1px 2px 2px #00ff00"; // active color
    }
    if (contactTop_ScrolldivBottom >= 0) {
      document.getElementById("contact-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-contact-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
    if (contactBottom_ScrolldivBottom <= 0) {
      document.getElementById("contact-btn-desktop").style.boxShadow = "1px 2px 2px #ff5555"; // default color
      document.getElementById("mobile-contact-btn").style.boxShadow = "1px 2px 2px #ff5555"; // default color
    }
  }
}



//  <!-- mobile menu btn animation -->
var menu = document.getElementById("mobile-menu");
var menuImg = document.getElementById("menuImg");
var closeMenuImg = document.getElementById("closeMenuImg");
menuImg.style.display = "block";

function clickMenu() {
  if (menuImg.style.display === "block") {
    // btn animation
    menuImg.style.transform = "rotateZ(180deg)";
    menuImg.style.transition = "0.3s";
    // menu animation
    menu.style.width = "100%";
    menu.style.opacity = "1";
    menu.style.transition = "0.5s";

    setTimeout(() => {
      menuImg.style.display = "none";
      closeMenuImg.style.display = "block";

      // untoggle animation
      menuImg.style.transform = "rotateY(0deg)";
      menuImg.style.width = "80px";
      menuImg.style.transition = "0.3s";
    }, 250);

  } else {

    // btn animation
    closeMenuImg.style.transform = "rotateZ(-180deg)";
    closeMenuImg.style.transition = "0.3s";
    // menu animation
    menu.style.width = "0%";
    menu.style.opacity = "0";
    menu.style.transition = "0.4s";

    setTimeout(() => {
      menuImg.style.display = "block";
      closeMenuImg.style.display = "none";

      // untoggle animation
      closeMenuImg.style.transform = "rotateY(0deg)";
      closeMenuImg.style.width = "80px";
      closeMenuImg.style.transition = "0.3s";
    }, 250);

  }
}

// close mobile menu after btn click
function clickMobileMenuItem() {
  // btn animation
  closeMenuImg.style.transform = "rotateZ(-180deg)";
  closeMenuImg.style.transition = "0.3s";
  // menu animation
  menu.style.width = "0%";
  menu.style.opacity = "0";
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



// To show To Top button on scroll
let toTopBtnContainer = document.getElementById("toTopBtn-container");
let quoteBackground = document.getElementById("quote-background");

window.addEventListener("scroll", scrollForTopBtn);

function scrollForTopBtn() {
  if (window.scrollY >= 500) {
    toTopBtnContainer.style.top = "96vh";
    if (document.URL.includes("index.html")) {
      quoteBackground.style.opacity = "0.05";
    }
  } else {
    toTopBtnContainer.style.top = "110vh";
    if (document.URL.includes("index.html")) {
      quoteBackground.style.opacity = "0.3";
    }
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

      storyBtn.style.borderTopColor = "#00ff00";
      overviewBtn.style.borderTopColor = "#ff0000";

      storyContainer.style.opacity = "1";
      overviewContainer.style.opacity = "0";

      storyContainer.style.opacity = "1";
      overviewContainer.style.opacity = "0";

      overviewBtn.style.opacity = "1";
      storyBtn.style.opacity = "1";

      overviewContainer.style.transition = "1s";
      storyContainer.style.transition = "1s";
    }, 5);
  }
}

function clickOverviewBtn() {

  if ((overviewContainer.style.display = "none")) {
    overviewContainer.style.display = "flex";
    storyContainer.style.display = "none";

    overviewBtn.style.opacity = "0.5";
    storyBtn.style.opacity = "0.5";

    setTimeout(() => {

      storyBtn.style.borderTopColor = "#ff0000";
      overviewBtn.style.borderTopColor = "#00ff00";

      storyContainer.style.opacity = "0";
      overviewContainer.style.opacity = "1";

      overviewBtn.style.opacity = "1";
      storyBtn.style.opacity = "1";

      overviewContainer.style.transition = "1s";
      storyContainer.style.transition = "1s";
    }, 5);
  }
}



// copy current project link
let shareProjectBtn = document.getElementById("share-project-btn");
function copyCurrentURL() {

  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Project's link copied to clipboard");
  }, () => {
    window.prompt("Please copy this link", window.location.href);
  });
}


// this if is to run the code only if the page has the slider or the big gallery
//  if the page doesn't have them, just add its location.href with || or - before it
if (window.location.href.includes("project-my-logo")) {

  // overview and story slider
  let slideContainerList = document.getElementById("slide-container-list").children;
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
  let galleryArr = [...gallery];

  let container = document.getElementById("big-gallery-modal-container");
  let modal = document.getElementById("big-gallery-modal");

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
}




// validate email and clear form inputs by reloading page after submit
function clearMessage(event) {
  let formName = document.getElementById("contact-name").value;
  let formEmail = document.getElementById("contact-email").value;
  let formMessage = document.getElementById("contact-message").value;

  if (formEmail.includes("@")) {
    document.getElementById("contact-email").style.boxShadow = "1px 1px 1px #00ff00";
  } else {
    document.getElementById("contact-email").style.boxShadow = "1px 1px 1px #ff5555";
  }

  if (formName.length !== 0 && formEmail.length !== 0 && formMessage.length !== 0 && formEmail.includes("@")) {

    setTimeout(() => {
      location.reload(true);
    }, 1500);
  }
}