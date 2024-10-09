// NavBar 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const observerOptions = {
    root: null,
    threshold: 0.3, 
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionID = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector(`a[href="#${sectionID}"]`).classList.add("active");
      }
    });
  }, observerOptions);
  sections.forEach((section) => observer.observe(section));
});

// Function to handle the download button click event        
 function DownloadBtn() {
    document.querySelector(".Download_CV").innerHTML="Download Sucessfully";
    setTimeout ( () => {
        alert("CV downloaded successfully!"); 
        },2000); 
     setTimeout(() => {
       document.querySelector(".Download_CV").innerHTML = "Download CV";
    }, 8000);  
}

// // ShowCase
// function toggleClassBasedOnWidth() {
//   const element = document.getElementById("ShowCase"); 
//   if (window.innerWidth < 768) {
//      element.classList.add("row");
//      element.classList.remove("d-flex ", "flex-row", "overflow-x-scroll");
//   } else if (window.innerWidth >= 768) {
//    element.classList.add("d-flex", "flex-row", "overflow-x-scroll");
//    element.classList.remove("row");
//   }
// }
// toggleClassBasedOnWidth();
// window.addEventListener("resize", toggleClassBasedOnWidth);

// AOS
function initializeAOS() {
if (window.innerWidth < 768) {
  AOS.init({
    disable: true,
    duration: 200,
    once: true,
   });
} else {
   AOS.init({
      disable: false,
      once: true,
      mirror:true,
  });
    AOS.refresh(); 
    AOS.remove(); 
  }
}
window.addEventListener("load", initializeAOS);
window.addEventListener("resize", initializeAOS);

// ===========================================================

document.getElementsByClassName("TabHead")[0].classList.add("active");
document.getElementsByClassName("TabContent")[0].classList.remove("d-none");
document.getElementsByClassName("TabContent")[0].classList.add("d-block");

function setActiveTab(event, contentId) {
  var i, tabHeader, tabContent;
  // Remove 'active' class from all tab headers
  tabHeader = document.getElementsByClassName("TabHead");
  for (i = 0; i < tabHeader.length; i++) {
    tabHeader[i].classList.remove("active");
  }

  // Hide all tab content by adding 'd-none'
  tabContent = document.getElementsByClassName("TabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add("d-none");
  }

  // Display the selected tab content
  document.getElementById(contentId).classList.remove("d-none");
  document.getElementById(contentId).classList.add("d-block");
  // Add 'active' class to the clicked tab header
  event.currentTarget.classList.add("active");
}

// ================================================================= ScrollReveal

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  // reset: true,
};

ScrollReveal().reveal(".Hero__Name", {
  ...scrollRevealOption,
  origin: "left",
  delay:1800,
});

ScrollReveal().reveal(".Hero__Intrests", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".Hero__About", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".Hero__Blob", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".Hero__Image", {
  ...scrollRevealOption,
  delay: 2000,
  origin:"right",
});

ScrollReveal().reveal(".Section__Heading", {
  ...scrollRevealOption,
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".Section__Content", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "right",
});

ScrollReveal().reveal(".Section__Content1", {
  ...scrollRevealOption,
  delay: 1200,
  origin: "right",
});

ScrollReveal().reveal(".Section__Content2", {
  ...scrollRevealOption,
  delay: 1400,
  origin: "right",
});

ScrollReveal().reveal(".Section__Content3", {
  ...scrollRevealOption,
  delay: 1600,
  origin: "right",
});

ScrollReveal().reveal(".Skill__Img", {
  ...scrollRevealOption,
  delay: 1800,
});

ScrollReveal().reveal(".Project_Showcase", {
  ...scrollRevealOption,
  delay: 2000,
  origin: "right",
});

ScrollReveal().reveal(".GIT__Button", {
  ...scrollRevealOption,
  delay: 1800,
});

