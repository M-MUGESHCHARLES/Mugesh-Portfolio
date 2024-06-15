
// Function to handle the download button click event        
 function DownloadBtn() {

    //  Get the element with the class "Download_CV" and change its innerHTML to "Download Completed"
    document.querySelector(".Download_CV").innerHTML="Download Sucessfully";

    // Function to display an alert message
    setTimeout ( () => {
        alert("CV downloaded successfully!"); 
        },2000); 

     setTimeout(() => {
       document.querySelector(".Download_CV").innerHTML = "Download CV";
    }, 8000); 
      
      
}
