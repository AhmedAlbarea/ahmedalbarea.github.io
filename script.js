

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


// quote jobs slider every some seconds for text and backgrounds
if (document.title == "Ahmed Al-barea portfolio") {

  var designerDeveloper = document.getElementById("designer-developer");
  var jobsArr = [".......","UX Designer", "Logo Designer", "Front-End Developer"];
  var currentJob = 0;
  designerDeveloper.style.opacity = "1";
  designerDeveloper.innerHTML = jobsArr[currentJob];

  function loopQuoteTitles() {
    setTimeout(() => {
      designerDeveloper.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      currentJob++;
      designerDeveloper.style.opacity = "1";
      designerDeveloper.innerHTML = jobsArr[currentJob];
      // this switch is to change home section according to jobs names
      switch (currentJob) {
        case 0:
          document.getElementById("quote-background0").style.opacity = "0.05";
          
          break;
        case 1:
          document.getElementById("quote-background0").style.opacity = "0";
          document.getElementById("quote-background3").style.opacity = "0";
          document.getElementById("quote-background1").style.opacity = "0.05";
          break;
        case 2:
          document.getElementById("quote-background1").style.opacity = "0";
          document.getElementById("quote-background2").style.opacity = "0.05";
          break;
        case 3:
          document.getElementById("quote-background2").style.opacity = "0";
          document.getElementById("quote-background3").style.opacity = "0.05";
          break;
        case 0:
          document.getElementById("quote-background3").style.opacity = "0";
          document.getElementById("quote-background0").style.opacity = "0.05";
          break;
      }

      if (currentJob == 3) {
        currentJob = 0;
      } loopQuoteTitles()
    }, 4000);
  } loopQuoteTitles();
}


//  to change home nav button colors on scroll according to sections
let title = document.title;

// all buttons 
let homeBtn = document.getElementById("home-btn-desktop");
let workBtn = document.getElementById("work-btn-desktop");
let contactBtn = document.getElementById("contact-btn-desktop");
let aboutBtn = document.getElementById("about-btn-desktop");
// mobile
let homeBtnMob = document.getElementById("mobile-home-btn");
let workBtnMob = document.getElementById("mobile-work-btn");
let contactBtnMob = document.getElementById("mobile-contact-btn");
let aboutBtnMob = document.getElementById("mobile-about-btn");

function activeBtn(item, item2) {
  item.style.boxShadow = "1px 2px 2px #00ff00"; // active color
  item2.style.boxShadow = "1px 2px 2px #00ff00"; // active color
}
function defaultBtn(item, item2) {
  item.style.boxShadow = "1px 2px 2px #ff5555"; // default color
  item2.style.boxShadow = "1px 2px 2px #ff5555"; // default color
}

if (title !== "Ahmed Al-barea portfolio") {
  //  if not on home page, highlight only work button
  activeBtn(workBtn, workBtnMob);
}

// if on home page highlight the following 
if (title == "Ahmed Al-barea portfolio") {

  // home button default color onload
 activeBtn(homeBtn, homeBtnMob);

  // get sections 
  let homeSect = document.getElementById("home-section");
  let workSect = document.getElementById("work-section");
  let aboutSect = document.getElementById("about-section");
  let skillSect = document.getElementById("skills-section");
  let contactSect = document.getElementById("contact-section");

  // fixed div for onscrolling detection
  let onscrolldiv = document.getElementById("onscrolldiv");


  window.addEventListener("scroll", scrollForNav);
  function scrollForNav() {

    // onscrolling div top and bottom 
    let onscrolldivBottom = onscrolldiv.getBoundingClientRect().bottom;

    // sections tops and bottoms
    let homeTop = homeSect.getBoundingClientRect().top;
    let homeBottom = homeSect.getBoundingClientRect().bottom;

    let workTop = workSect.getBoundingClientRect().top;
    let workBottom = workSect.getBoundingClientRect().bottom;

    let aboutTop = aboutSect.getBoundingClientRect().top;
    let aboutBottom = aboutSect.getBoundingClientRect().bottom;
    
    let skillsTop = skillSect.getBoundingClientRect().top;
    let skillsBottom = skillSect.getBoundingClientRect().bottom;

    let contactTop = contactSect.getBoundingClientRect().top;
    let contactBottom = contactSect.getBoundingClientRect().bottom;



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
    // skills
    let skillsTop_ScrolldivBottom = skillsTop - onscrolldivBottom;
    let skillsBottom_ScrolldivBottom = skillsBottom - onscrolldivBottom;
    // contact
    let contactTop_ScrolldivBottom = contactTop - onscrolldivBottom;
    let contactBottom_ScrolldivBottom = contactBottom - onscrolldivBottom;



    //  the effect on scroll with if conditions 

    // home button *****************************************************
    if (homeTop_ScrolldivBottom <= 0) {
      activeBtn(homeBtn, homeBtnMob);
    }
    if (homeTop_ScrolldivBottom >= 0) {
      defaultBtn(homeBtn, homeBtnMob);
    }
    if (homeBottom_ScrolldivBottom <= 0) {
      defaultBtn(homeBtn, homeBtnMob);
    }
    // work button *****************************************************
    if (workTop_ScrolldivBottom <= 0) {
      activeBtn(workBtn, workBtnMob);
    }
    if (workTop_ScrolldivBottom >= 0) {
      defaultBtn(workBtn, workBtnMob);
    }
    if (workBottom_ScrolldivBottom <= 0) {
      defaultBtn(workBtn, workBtnMob);
    }
    // about button *****************************************************
    if (aboutTop_ScrolldivBottom <= 0) {
      activeBtn(aboutBtn, aboutBtnMob);
    }
    if (aboutTop_ScrolldivBottom >= 0) {
      defaultBtn(aboutBtn, aboutBtnMob);
    }
    if (aboutBottom_ScrolldivBottom <= 0) {
      defaultBtn(aboutBtn, aboutBtnMob);
    }
    // contact button *****************************************************
    if (contactTop_ScrolldivBottom <= 0) {
      activeBtn(contactBtn, contactBtnMob);
    }
    if (contactTop_ScrolldivBottom >= 0) {
      defaultBtn(contactBtn, contactBtnMob);
    }
    if (contactBottom_ScrolldivBottom <= 0) {
      defaultBtn(contactBtn, contactBtnMob);
    }
    // skill percent section *****************************************************
    // this condition to fill the percent only once.
    var skillContainerBackground = document.querySelector(".skill-icon-container").style.background;
    
    if (skillsTop_ScrolldivBottom <= 0 && skillContainerBackground == "" ) {
        fillSkills(); // active color
    }      
    if (skillsBottom_ScrolldivBottom <= 0 && skillContainerBackground == "" ) {
        fillSkills(); // active color
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



// To show ToTop button on scroll and change home section backround opacity
let toTopBtnContainer = document.getElementById("toTopBtn-container");

window.addEventListener("scroll", scrollForTopBtn);

function scrollForTopBtn() {
  if (window.scrollY >= 500) {
    toTopBtnContainer.style.top = "96vh";
  } else {
    toTopBtnContainer.style.top = "110vh";
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


  // to fill the percen round bar
  function fillSkills() {

  var skills = document.querySelectorAll(".skill-icon-container");
  var i = skills.length;
  

  while (i--) {

    if (skills[i].className.includes("figma")) // condition
        {skillPercent = 90; fill(skills[i], skillPercent)}; // skill level and function call
    if (skills[i].className.includes("adobe-xd")) 
        {skillPercent = 90; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("adobe-illustrator")) 
        {skillPercent = 90; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("photoshop")) 
        {skillPercent = 80; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("html")) 
        {skillPercent = 90; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("css")) 
        {skillPercent = 90; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("javascript")) 
        {skillPercent = 70; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("miro")) 
        {skillPercent = 97; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("coolors")) 
        {skillPercent = 97; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("google-doc")) 
        {skillPercent = 97; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("vsc")) 
        {skillPercent = 90; fill(skills[i], skillPercent)};
    if (skills[i].className.includes("php")) 
        {skillPercent = 60; fill(skills[i], skillPercent)};

      function fill(item, skillPercent) {
        var percent = 0;
        setInterval(() => {
            if (percent == skillPercent) {
                clearInterval();}
            else {
                percent++;
                item.style.background = "conic-gradient( #00ff00 " + percent + "%, #000 0%)";
                item.setAttribute("data-value", percent+"%");
            }
        }, 30);
    }
  }
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
};

// fuck stupid scammers
let formText = document.getElementById("contact-message");formText.addEventListener("keyup", fuckScammers =>{if (formText.value.includes("http" || "hojagoak")) {formText.value = null;}});