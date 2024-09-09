// NavBar 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null, // relative to the viewport
    threshold: 0.7, // 70% of the section is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionID = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to the current link
        document
          .querySelector(`a[href="#${sectionID}"]`)
          .classList.add("active");
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
  const element = document.getElementById("ShowCase"); // Replace with the selector of your element

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
  AOS.init({
    offset: window.innerWidth < 768 ? 100 : 50, // Increase offset on mobile
    once: true,
    duration: 600,
    mirror: false,
    disableMutationObserver: true,
  });

