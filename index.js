const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', event =>{

 // Check for WebShare API support

 if (navigator.share) {
  // Browser Supports native share API
  navigator.share({
   text:"Testing WebSHare API:",
   url: "https://www.google.com/"
  
  }).then( () => {
   console.log("Thanks for Sharing");
  })
  .catch((err) => console.error(err));
 } else{
  // Fallback
  alert("The Current browser does not suport the share function. Please, manually share the link")
 }
});