// NavBar 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const observerOptions = {
    root: null,
    threshold: 0.7, 
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

// ShowCase
function toggleClassBasedOnWidth() {
  const element = document.getElementById("ShowCase"); 
  if (window.innerWidth < 768) {
     element.classList.add("row");
     element.classList.remove("d-flex ", "flex-row", "overflow-x-scroll");
  } else if (window.innerWidth >= 768) {
   element.classList.add("d-flex", "flex-row", "overflow-x-scroll");
   element.classList.remove("row");
  }
}
toggleClassBasedOnWidth();
window.addEventListener("resize", toggleClassBasedOnWidth);

// AOS
  function initializeAOS() {
    if (window.innerWidth >= 768) {
      AOS.init({
        once: true,
        mirror: false,
        offset: 50,
        duration: 600,
      });
    } else {
      AOS.refresh(); // Refresh AOS if it was previously initialized
      AOS.remove(); // Remove AOS animations if the screen is too small
    }
  }
  initializeAOS();
  window.addEventListener("resize", initializeAOS);
