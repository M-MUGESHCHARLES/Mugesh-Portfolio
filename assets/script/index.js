
// Function to handle the download button click event        
 function DownloadBtn() {

    //  Get the element with the class "Download_CV" and change its innerHTML to "Download Completed"
    document.querySelector(".Download_CV").innerHTML="Download Completed";

    // Function to display an alert message
    setTimeout ( () => {
        alert("CV downloaded successfully!"); 
        },2000); 
      
      
}
